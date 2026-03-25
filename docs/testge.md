---
title: Guia Completo da DevScope API
description: Referência completa para integração com a API REST da DevScope
---



## Geral

A API segue os princípios REST e utiliza JSON para todos os payloads. Todas as comunicações são feitas sobre HTTPS e requerem autenticação via Bearer Token.

### Características Principais

- **Alta disponibilidade** — 99.9% uptime garantido em todos os planos pagos
- **Rate limiting inteligente** — limites por endpoint e não globais
- **Versionamento semântico** — compatibilidade garantida dentro da mesma versão major
- **Respostas paginadas** — todos os endpoints de listagem suportam paginação
- **Webhooks em tempo real** — notificações instantâneas para eventos importantes

---

## Autenticação

### Bearer Token

Todas as chamadas requerem o token no header HTTP:
```http
Authorization: Bearer SEU_TOKEN_AQUI
Content-Type: application/json
```

### Gerar um Token

1. Acede ao painel em [app.devscope.net](https://app.devscope.net)
2. Navega para **Definições → API Keys**
3. Clica em **Novo Token**
4. Define um nome descritivo e os scopes necessários
5. Copia o token — só é mostrado uma vez

> ⚠️ **Atenção:** Nunca partilhes o teu token. Se suspeitas de comprometimento, revoga imediatamente em Definições → API Keys.

### Scopes Disponíveis

| Scope | Descrição | Nível de Acesso |
|-------|-----------|-----------------|
| `read:projects` | Leitura de projetos | Leitura |
| `write:projects` | Criação e edição de projetos | Escrita |
| `read:docs` | Leitura de documentação | Leitura |
| `write:docs` | Publicação de documentação | Escrita |
| `admin:webhooks` | Gestão de webhooks | Administrador |
| `admin:users` | Gestão de utilizadores | Administrador |

---

## Endpoints

### Projetos

#### Listar Projetos
```http
GET /v1/projects
```

**Parâmetros de Query:**

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `page` | integer | Não | Número da página (default: 1) |
| `per_page` | integer | Não | Resultados por página (default: 20, max: 100) |
| `status` | string | Não | Filtrar por estado: `active`, `archived`, `building` |
| `language` | string | Não | Filtrar por idioma: `pt`, `en`, `es` |

**Exemplo de Request:**
```bash
curl -X GET "https://api.devscope.net/v1/projects?status=active&page=1" \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json"
```

**Resposta de Sucesso (200):**
```json
{
  "data": [
    {
      "id": "proj_abc123",
      "name": "Portal de Documentação",
      "slug": "portal-docs",
      "status": "active",
      "languages": ["pt-PT", "en"],
      "created_at": "2025-01-15T10:30:00Z",
      "updated_at": "2025-03-10T14:22:00Z",
      "stats": {
        "pages": 47,
        "chatbot_queries_today": 128,
        "last_build_duration_ms": 2340
      }
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 1,
    "total_pages": 1
  }
}
```

---

#### Criar Projeto
```http
POST /v1/projects
```

**Body:**
```json
{
  "name": "Novo Produto",
  "slug": "novo-produto",
  "languages": ["pt-PT", "en"],
  "theme": {
    "primary_color": "#0066CC",
    "logo_url": "https://cdn.empresa.com/logo.png"
  },
  "repository": {
    "provider": "github",
    "url": "https://github.com/empresa/docs-repo",
    "branch": "main"
  }
}
```

**Resposta de Sucesso (201):**
```json
{
  "id": "proj_xyz789",
  "name": "Novo Produto",
  "status": "created",
  "webhook_url": "https://api.devscope.net/v1/webhooks/proj_xyz789",
  "deploy_url": "https://novo-produto.devscope.app"
}
```

---

#### Fazer Build

Despoleta o processo de build para um projeto específico.
```http
POST /v1/projects/{project_id}/builds
```

**Parâmetros de Path:**

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `project_id` | string | ID único do projeto |

**Body (opcional):**
```json
{
  "force": true,
  "notify_email": "equipa@empresa.com"
}
```

**Resposta (202):**
```json
{
  "build_id": "build_789ghi",
  "project_id": "proj_abc123",
  "status": "queued",
  "triggered_by": "api",
  "estimated_duration_seconds": 45,
  "created_at": "2025-03-18T10:00:00Z"
}
```

---

#### Estado do Build
```http
GET /v1/projects/{project_id}/builds/{build_id}
```

**Possíveis Estados:**

| Estado | Descrição |
|--------|-----------|
| `queued` | Na fila de espera |
| `running` | A processar ativamente |
| `success` | Concluído com sucesso |
| `failed` | Falhou — consultar `error_message` |
| `cancelled` | Cancelado manualmente |

---

### Documentação

#### Listar Páginas
```http
GET /v1/projects/{project_id}/pages
```

**Resposta (200):**
```json
{
  "data": [
    {
      "id": "page_001",
      "title": "Introdução",
      "slug": "introducao",
      "language": "pt-PT",
      "last_updated": "2025-03-10T09:00:00Z",
      "word_count": 342,
      "status": "published"
    }
  ]
}
```

---

### Chatbot RAG

#### Fazer Pergunta
```http
POST /v1/projects/{project_id}/chat
```

**Body:**
```json
{
  "query": "Como configuro a autenticação SSO?",
  "language": "pt",
  "session_id": "sess_abc123"
}
```

**Resposta (200):**
```json
{
  "answer": "Para configurar SSO, acede a Definições → Autenticação → SSO...",
  "sources": [
    {
      "page_title": "Configuração SSO",
      "page_url": "/docs/autenticacao/sso",
      "relevance_score": 0.94
    }
  ],
  "session_id": "sess_abc123",
  "tokens_used": 312
}
```

---

## Erros

A API usa códigos HTTP standard. Em caso de erro o corpo da resposta tem sempre:
```json
{
  "error": {
    "code": "invalid_token",
    "message": "O token fornecido é inválido ou expirou.",
    "docs_url": "https://docs.devscope.net/api/erros#invalid_token"
  }
}
```

### Códigos de Erro Comuns

| Código HTTP | Código de Erro | Descrição |
|-------------|----------------|-----------|
| 400 | `invalid_request` | Parâmetros inválidos ou em falta |
| 401 | `unauthorized` | Token em falta ou inválido |
| 403 | `forbidden` | Sem permissão para este recurso |
| 404 | `not_found` | Recurso não encontrado |
| 409 | `conflict` | Conflito — ex: slug já existe |
| 422 | `validation_error` | Dados de input inválidos |
| 429 | `rate_limit_exceeded` | Limite de requests excedido |
| 500 | `internal_error` | Erro interno do servidor |

---

## Rate Limiting

Os headers de resposta incluem sempre informação sobre os limites:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 987
X-RateLimit-Reset: 1710759600
```

### Limites por Plano

| Plano | Requests/hora | Builds/dia | Projetos | Chatbot queries/dia |
|-------|---------------|------------|----------|---------------------|
| Free | 100 | 5 | 1 | 50 |
| Starter | 1.000 | 50 | 5 | 500 |
| Pro | 10.000 | ilimitado | 25 | 5.000 |
| Enterprise | ilimitado | ilimitado | ilimitado | ilimitado |

---

## Webhooks

### Configurar Webhook
```http
POST /v1/projects/{project_id}/webhooks
```

**Body:**
```json
{
  "url": "https://a-tua-app.com/webhook",
  "events": [
    "build.success",
    "build.failed",
    "page.published",
    "chatbot.unanswered"
  ],
  "secret": "webhook-secret-para-verificar"
}
```

### Eventos Disponíveis

| Evento | Descrição |
|--------|-----------|
| `build.success` | Build concluído com sucesso |
| `build.failed` | Build falhou |
| `build.started` | Build iniciado |
| `page.published` | Página publicada |
| `page.deleted` | Página eliminada |
| `chatbot.unanswered` | Pergunta sem resposta encontrada |
| `project.created` | Novo projeto criado |

---

## SDKs e Bibliotecas

### JavaScript / TypeScript
```bash
npm install @devscope/sdk
```
```typescript
import { DevScope } from '@devscope/sdk';

const client = new DevScope({
  token: process.env.DEVSCOPE_API_TOKEN,
});

const projects = await client.projects.list({ status: 'active' });
const build = await client.builds.create('proj_abc123', { force: true });
```

### Python
```bash
pip install devscope-sdk
```
```python
from devscope import DevScope

client = DevScope(token="SEU_TOKEN")
projects = client.projects.list(status="active")
```

---

## Suporte

Para questões técnicas:

- **Email:** api-support@devscope.net
- **Documentação:** docs.devscope.net
- **Status da API:** status.devscope.net
- **GitHub Issues:** github.com/devscope/api-issues