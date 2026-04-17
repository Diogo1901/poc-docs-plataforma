# Listing

### Listing Webhook

A notification via webhook is sent whenever a property is created, updated, or removed, provided the CRM subscribes to this functionality. To receive these notifications, the CRM must supply a designated endpoint where the webhook can be directed.

When an event such as the creation, update, or deletion of a property occurs, the system triggers a webhook notification. This notification is then sent to the specified endpoint, allowing the CRM to process and respond to the event in real-time. By subscribing to this feature and providing the necessary endpoint, the CRM ensures that it remains synchronized with the latest property data, facilitating efficient and up-to-date property management.

### Method `POST`

### Headers

<table><thead><tr><th width="154">Name</th><th width="136">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>token</code></td><td><code>string</code></td><td>Token supplied by CasaYes to the CRM for identifying requests sent to the CRM API.</td></tr></tbody></table>

### Body application/json `WebhookEndpoint`

<table><thead><tr><th width="224">Name</th><th width="131">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>ListingReference</code></td><td><code>string</code></td><td>Listing external reference.</td></tr><tr><td><code>ListingPublicId</code></td><td><code>string</code></td><td>Listing CasaYes publicId.</td></tr><tr><td><code>EventType</code></td><td><code>string</code></td><td>[ 'LISTING_CREATED', 'LISTING_UPDATED', 'LISTING_DELETED', 'LISTING_FAILED_TO_CREATE', 'LISTING_FAILED_TO_UPDATE', 'LISTING_FAILED_TO_DELETE' ]</td></tr><tr><td><code>Success</code></td><td><code>boolean</code></td><td>If operation ended with success.</td></tr><tr><td><code>ErrorMessages</code></td><td><code>string []</code></td><td>Errors that occur during the process.</td></tr><tr><td><code>OfficeIntegrationSecret</code></td><td><code>string</code></td><td>Office integration secret.</td></tr><tr><td><code>Status</code></td><td><code>string</code></td><td>[ 'Published', 'Unpublished', 'UnpublishedByAdmin' ]</td></tr></tbody></table>

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
        "ListingPublicId": "KiKJ3LHhHm2Q",
        "EventType": "LISTING_CREATED",
        "Success": true,
        "ErrorMessages": [],
        "OfficeIntegrationSecret": "007_1711534073_BAAAAFB5-577D-4BCE-AAAA-894D1F4EBBBB",
        "Status": "Published"
    }
```