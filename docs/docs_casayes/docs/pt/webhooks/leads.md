# Leads

### Leads Webhook

É enviada uma notificação via webhook sempre que uma nova lead é recebida, desde que o CRM subscreva esta funcionalidade. Para receber estas notificações, o CRM deve fornecer um endpoint designado para onde o webhook possa ser direcionado.

Quando uma nova lead é capturada, o sistema aciona uma notificação webhook. Esta notificação é então enviada para o endpoint especificado, permitindo que o CRM processe e responda á lead em tempo real. Ao subscrever esta funcionalidade e fornecer o endpoint necessário, o CRM garante que é atualizado com as informações mais recentes das leads, permitindo uma gestão de leads rápida e eficaz.

***

### Method `POST`

### Headers

<table><thead><tr><th width="136">Nome</th><th width="121">Tipo</th><th>Descrição</th></tr></thead><tbody><tr><td><code>token</code></td><td><code>string</code></td><td>Token fornecido pela CasaYes ao CRM para identificar pedidos enviados para a API do CRM.</td></tr></tbody></table>

### Body application/json `WebhookEndpoint`

<table><thead><tr><th width="241">Nome</th><th width="122">Tipo</th><th>Descrição</th></tr></thead><tbody><tr><td><code>EntityType</code></td><td><code>string</code></td><td>['Listing', 'Office', 'BusinessForm', 'User', 'EvaluationForm']</td></tr><tr><td><code>EntityPublicId</code></td><td><code>string</code></td><td>Id público da entidade no CasaYes.</td></tr><tr><td><code>EntityReference</code></td><td><code>string</code></td><td>Referência da entidade.</td></tr><tr><td><code>LeadReference</code></td><td><code>string</code></td><td>Id público da lead.</td></tr><tr><td><code>Source</code></td><td><code>string</code></td><td>'CasaYes'</td></tr><tr><td><code>CreatedDate</code></td><td><code>datetime</code></td><td>Data de criação da lead.</td></tr><tr><td><code>Message</code></td><td><code>string</code></td><td>Mensagem da lead.</td></tr><tr><td><code>SenderName</code></td><td><code>string</code></td><td>Nome do remetente.</td></tr><tr><td><code>SenderEmail</code></td><td><code>string</code></td><td>Email do remetente.</td></tr><tr><td><code>SenderPhone</code></td><td><code>string</code></td><td>Contacto telefónico do remetente</td></tr><tr><td><code>NumberResidents</code></td><td><code>integer</code></td><td>Número previsto de residentes para o apartamento.</td></tr><tr><td><code>HasPets</code></td><td><code>bool</code></td><td>Têm animais de estimação.</td></tr><tr><td><code>EstimatedDateToMove</code></td><td><code>string</code></td><td>['Soon', 'Flexible', 'ExactDate']</td></tr><tr><td><code>MonthlyIncome</code></td><td><code>integer</code></td><td>Rendimento mensal .</td></tr><tr><td><code>PresentationLetter</code></td><td><code>string</code></td><td>Carta de apresentação.</td></tr></tbody></table>

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
        "CreatedDate": "2024-08-09T15:05:44.6131515Z",
        "EntityPublicId": "A3bT7Y2xL6w",
        "EntityReference": "857632194-6",
        "EntityType": "Listing",
        "EstimatedDateToMove": "2024-12-09T15:05:44.6131515Z",
        "HasPets": false,
        "LeadReference": "CY-Listing-A3bT7Y2xL6w-b24e6f80-17c9-4a8f-92b3-7e123d4bcf90",
        "Message": "Hi, I’m interested in this listing and would like to schedule a viewing. Please contact me. Thanks",
        "MonthlyIncome": 2000,
        "NumberResidents": 2,
        "PresentationLetter": "",
        "SenderEmail": "john.smith@gmail.com",
        "SenderName": "John Smith",
        "SenderPhone": "919111222",
        "Source": "CasaYes"
    }
```