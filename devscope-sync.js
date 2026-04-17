// devscope-sync.js — colar na pipeline CI/CD do cliente
// Requer: node 18+, variável de ambiente DEVSCOPE_PIPELINE_KEY

const fs = require('fs');
const path = require('path');
const https = require('https');

async function main() {
  // 1. Ler configuração
  const config = JSON.parse(fs.readFileSync('devscope.json', 'utf8'));
  const apiKey = process.env.DEVSCOPE_PIPELINE_KEY;

  if (!apiKey) {
    console.error('DEVSCOPE_PIPELINE_KEY não definida');
    process.exit(1);
  }

  // 2. Ler ficheiros Markdown
  const files = readMarkdownFiles(config.docsPath);
  console.log(`Encontrados ${files.length} ficheiros Markdown`);

  // 3. Enviar para a API
  const payload = {
    tenantId: config.tenantId,
    config: {
      locales: {
        default: config.locales.default,
        targets: config.locales.targets,
      },
      features: {
        enableChatbot: config.features?.enableChatbot ?? true,
      },
    },
    files: files,
  };

  const response = await callApi(
    config.apiUrl + '/api/sync',
    payload,
    apiKey
  );

  console.log('Pipeline iniciada. Job ID:', response.jobId);

  // 4. Polling do estado
  await pollStatus(config.apiUrl, response.jobId, apiKey);
}

function readMarkdownFiles(docsPath) {
  const files = [];
  const fullPath = path.resolve(docsPath);

  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullEntry = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullEntry);
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        const relativePath = path.relative(fullPath, fullEntry);
        files.push({
          path: relativePath.replace(/\\/g, '/'),
          content: fs.readFileSync(fullEntry, 'utf8'),
        });
      }
    }
  }

  walkDir(fullPath);
  return files;
}

async function callApi(url, payload, apiKey) {
  const body = JSON.stringify(payload);
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
        'Content-Length': Buffer.byteLength(body),
      },
    };
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 400) {
          reject(new Error(`API Error ${res.statusCode}: ${data}`));
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function getStatus(apiUrl, jobId, apiKey) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(`${apiUrl}/api/sync/status/${jobId}`);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname,
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + apiKey },
    };
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    req.end();
  });
}

async function pollStatus(apiUrl, jobId, apiKey) {
  console.log('A aguardar pipeline...');
  for (let i = 0; i < 60; i++) {
    await new Promise(r => setTimeout(r, 5000));
    const status = await getStatus(apiUrl, jobId, apiKey);
    console.log(`Estado: ${status.status}`);
    if (status.status === 'completed') {
      console.log('Pipeline concluída com sucesso!');
      return;
    }
    if (status.status === 'failed') {
      console.error('Pipeline falhou:', status.error);
      process.exit(1);
    }
  }
  console.error('Timeout: pipeline demorou mais de 5 minutos');
  process.exit(1);
}

main().catch(err => {
  console.error(err.message);
  process.exit(1);
});
