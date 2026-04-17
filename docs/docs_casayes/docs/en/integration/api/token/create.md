# Create

`api/v1/Token/GenerateToken`

**Description**: Create the access token required to authenticate in order to use other functionality within this API.

### Method `GET`

### Params

| Name           | Type     | Description    |
| -------------- | -------- | -------------- |
| `clientId`     | `string` | Client Id.     |
| `clientSecret` | `string` | Client Secret. |

### Example Request

```json
Method: GET
Params:
    {
        "clientId": "CasaYes.CRM.Integration",
        "clientSecret": "X36u8adBrS/geMsfe346735/RXq0QcTRaa2235RtNGkWyhFGc3M="
    }
```

### Example Response

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