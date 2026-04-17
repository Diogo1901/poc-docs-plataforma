# Leads

### Leads Webhook

A notification via webhook is sent whenever a new lead is received, provided the CRM subscribes to this functionality. To receive these notifications, the CRM must provide a designated endpoint where the webhook can be directed.

When a new lead is captured, the system triggers a webhook notification. This notification is then sent to the specified endpoint, allowing the CRM to process and respond to the lead in real-time. By subscribing to this feature and supplying the necessary endpoint, the CRM ensures it is updated with the latest lead information, enabling prompt and effective lead management.

***

### Method `POST`

### Headers

<table><thead><tr><th width="136">Name</th><th width="121">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>token</code></td><td><code>string</code></td><td>Token supplied by CasaYes to the CRM for identifying requests sent to the CRM API.</td></tr></tbody></table>

### Body application/json `WebhookEndpoint`

<table><thead><tr><th width="241">Name</th><th width="122">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>EntityType</code></td><td><code>string</code></td><td>['Listing', 'Office', 'BusinessForm', 'User', 'EvaluationForm']</td></tr><tr><td><code>EntityPublicId</code></td><td><code>string</code></td><td>Entity CasaYes publicId.</td></tr><tr><td><code>EntityReference</code></td><td><code>string</code></td><td>Entity external reference.</td></tr><tr><td><code>LeadReference</code></td><td><code>string</code></td><td>Lead publicId.</td></tr><tr><td><code>Source</code></td><td><code>string</code></td><td>'CasaYes'</td></tr><tr><td><code>CreatedDate</code></td><td><code>datetime</code></td><td>Lead created date.</td></tr><tr><td><code>Message</code></td><td><code>string</code></td><td>Lead message.</td></tr><tr><td><code>SenderName</code></td><td><code>string</code></td><td>Sender name.</td></tr><tr><td><code>SenderEmail</code></td><td><code>string</code></td><td>Sender email.</td></tr><tr><td><code>SenderPhone</code></td><td><code>string</code></td><td>Sender phone.</td></tr><tr><td><code>NumberResidents</code></td><td><code>integer</code></td><td>Projected residents for the apartment .</td></tr><tr><td><code>HasPets</code></td><td><code>bool</code></td><td>Has <a data-footnote-ref href="#user-content-fn-1">pets</a></td></tr><tr><td><code>EstimatedDateToMove</code></td><td><code>string</code></td><td>['Soon', 'Flexible', 'ExactDate']</td></tr><tr><td><code>MonthlyIncome</code></td><td><code>integer</code></td><td>Monthly income .</td></tr><tr><td><code>PresentationLetter</code></td><td><code>string</code></td><td>Presentation letter .</td></tr></tbody></table>

### Requests

**Example**

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

[^1]: additional information included in the user's CasaYes profile (may be missing)