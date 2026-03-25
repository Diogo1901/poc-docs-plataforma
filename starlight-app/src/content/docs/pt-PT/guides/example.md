---
title: DevScope API
description: Documentação completa da API REST da DevScope para integração com os nossos produtos.
---

A DevScope API é uma interface REST que permite integrar os produtos DevScope nas tuas aplicações. Todos os endpoints retornam JSON e requerem autenticação via Bearer Token.

## Autenticação

Todas as chamadas à API requerem um token de autenticação no header HTTP:
```http
Authorization: Bearer SEU_TOKEN_AQUI
```

Os tokens são gerados no painel de controlo em **Definições → API Keys**. Cada token tem um tempo de expiração de 90 dias e pode ser revogado a qualquer momento.

## Base URL
```
https://api.devscope.net/v1
```

## Endpoints

### Listar Projetos

Retorna todos os projetos associados à conta autenticada.
```http
GET /projects
```

**Resposta:**
```json
{
  "projects": [
    {
      "id": "proj_123abc",
      "name": "Portal de Documentação",
      "status": "active",
      "created_at": "2025-01-15T10:30:00Z",
      "languages": ["pt-PT", "en"]
    }
  ],
  "total": 1
}
```

### Criar Projeto

Cria um novo projeto de documentação.
```http
POST /projects
```

**Body:**
```json
{
  "name": "Novo Produto",
  "languages": ["pt-PT", "en"],
  "theme": "default"
}
```

**Resposta:**
```json
{
  "id": "proj_456def",
  "name": "Novo Produto",
  "status": "created",
  "webhook_url": "https://api.devscope.net/v1/webhooks/proj_456def"
}
```

### Fazer Build

Despoleta o processo de build para um projeto específico.
```http
POST /projects/{id}/build
```

**Parâmetros:**

| Parâmetro | Tipo | Descrição |
|---|---|---|
| `id` | string | ID único do projeto |
| `force` | boolean | Força rebuild completo (opcional) |

**Resposta:**
```json
{
  "build_id": "build_789ghi",
  "status": "queued",
  "estimated_duration_seconds": 45
}
```

### Estado do Build

Consulta o estado de um build em curso.
```http
GET /projects/{id}/builds/{build_id}
```

**Possíveis estados:**

- `queued` — na fila de espera
- `running` — a processar
- `success` — concluído com sucesso
- `failed` — falhou, consultar logs

## Limites de Utilização

A API tem os seguintes limites por plano:

| Plano | Requests/hora | Projetos | Builds/dia |
|---|---|---|---|
| Free | 100 | 1 | 5 |
| Starter | 1.000 | 5 | 50 |
| Pro | 10.000 | ilimitado | ilimitado |

## Erros

A API usa códigos HTTP standard. Em caso de erro, o corpo da resposta inclui sempre uma mensagem descritiva:
```json
{
  "error": "unauthorized",
  "message": "Token inválido ou expirado. Gera um novo token em Definições → API Keys.",
  "code": 401
}
```

**Códigos mais comuns:**

- `401` — Token em falta ou inválido
- `403` — Sem permissão para este recurso
- `404` — Projeto ou recurso não encontrado
- `429` — Limite de requests excedido
- `500` — Erro interno do servidor

## Webhooks

Podes configurar webhooks para receber notificações automáticas quando um build termina:
```http
POST /projects/{id}/webhooks
```
```json
{
  "url": "https://a-tua-app.com/webhook",
  "events": ["build.success", "build.failed"]
}
```

## Suporte

Para questões técnicas contacta **api-support@devscope.net** ou abre um ticket em [support.devscope.net](https://support.devscope.net).