# Imóveis

### Webhook de Imóveis

É enviada uma notificação via webhook sempre que um imóvel é criado, atualizado ou removido, desde que o CRM subscreva esta funcionalidade. Para receber estas notificações, o CRM deve fornecer um endpoint designado para onde o webhook possa ser direcionado.

Quando ocorre um evento como a criação, atualização ou eliminação de um imóvel, o sistema aciona uma notificação webhook. Esta notificação é então enviada para o endpoint especificado, permitindo que o CRM processe e responda ao evento em tempo real. Ao subscrever esta funcionalidade e fornecer o endpoint necessário, o CRM garante que permanece sincronizado com os dados mais recentes dos imóveis, facilitando uma gestão de imóveis eficiente e atualizada.

### Method `POST`

### Headers

<table><thead><tr><th width="154">Nome</th><th width="136">Tipo</th><th>Descrição</th></tr></thead><tbody><tr><td><code>token</code></td><td><code>string</code></td><td>Token fornecido pela CasaYes ao CRM para identificar pedidos enviados para a API do CRM.</td></tr></tbody></table>

### Body application/json `WebhookEndpoint`

<table><thead><tr><th width="224">Name</th><th width="131">Tipo</th><th>Descrição</th></tr></thead><tbody><tr><td><code>ListingReference</code></td><td><code>string</code></td><td>Referência do imóvel. </td></tr><tr><td><code>ListingPublicId</code></td><td><code>string</code></td><td>Id Público do Imóvel no CasaYes.</td></tr><tr><td><code>EventType</code></td><td><code>string</code></td><td>[ 'LISTING_CREATED', 'LISTING_UPDATED', 'LISTING_DELETED', 'LISTING_FAILED_TO_CREATE', 'LISTING_FAILED_TO_UPDATE', 'LISTING_FAILED_TO_DELETE' ]</td></tr><tr><td><code>Success</code></td><td><code>boolean</code></td><td>Se a operação terminou com sucesso.</td></tr><tr><td><code>ErrorMessages</code></td><td><code>string []</code></td><td>Erros que ocorreram durante o processo.</td></tr><tr><td><code>OfficeIntegrationSecret</code></td><td><code>string</code></td><td>Segredo de integração da agência.</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>[ 'Published', 'Unpublished', 'UnpublishedByAdmin' ]</td></tr></tbody></table>

### Requests

**Exemplo**

```json
Method: POST
Headers:
    {
        "token": "0b4ba9b1-8e04-44cc-84ec-eb0579c0bb20"
    }
Body:
    {
        "ListingPublicId": "KiKJ3LHhHm2Q",
        "EventType": "LISTING_CREATED",
        "Success": true,
        "ErrorMessages": [],
        "OfficeIntegrationSecret": "007_1711534073_BAAAAFB5-577D-4BCE-AAAA-894D1F4EBBBB",
        "Status": "Published"
    }
```