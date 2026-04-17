# Criar

`api/v1/Token/GenerateToken`

**Descrição**: Cria o token de acesso necessário para autenticação, de forma a utilizar outras funcionalidades desta API.

### Method `GET`

### Params

| Nome           | Tipo     | Descrição           |
| -------------- | -------- | ------------------- |
| `clientId`     | `string` | Id do cliente.      |
| `clientSecret` | `string` | Segredo do cliente. |

### Exemplo de Pedido

```json
Method: GET
Params:
    {
        "clientId": "CasaYes.CRM.Integration",
        "clientSecret": "X36u8adBrS/geMsfe346735/RXq0QcTRaa2235RtNGkWyhFGc3M="
    }
```

### Exemplo de Resposta

```json
Code: 200
Body:
    {
        "accessToken": "string",
        "expiresOnUtc": "2024-08-13T16:11:24.712Z"
    }
```

```json
Code: 400
Invalid client!
```