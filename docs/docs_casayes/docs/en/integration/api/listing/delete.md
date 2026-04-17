# Delete

`api/v1/Listing/{listingReferenceId}`

**Description**: Request for a listing to be deleted.

### Method `DELETE`

### Headers

<table><thead><tr><th width="236">Name</th><th width="131">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>Authorization</code></td><td><code>string</code></td><td>Bearer token used to authenticate your API request. Include the token in the format <code>Bearer YOUR_API_KEY</code>.</td></tr><tr><td><code>office-integration-secret</code></td><td><code>string</code></td><td>Integration secret for a given office.</td></tr><tr><td><code>listingReferenceId</code></td><td><code>string</code></td><td>Reference Id of the listing to be deleted.</td></tr></tbody></table>

### Example Request

```json
Method: DELETE
Headers:
    {
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZGODU0MEQyMzVGOTRBNjU3OUZENjM4RDQ5REE0NzVBODY5QzYzQ0EiLCJ4NXQiOiJiNFZBMGpYNVNtVjVfV09OU2RwSFdvYWNZOG8iLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL2xvZ2luLWRldi5jYXNheWVzLnB0LyIsImV4cCI6MTcyMjk0MTI2MywiaWF0IjoxNzIyOTM3NjYzLCJhdWQiOiJSZWFsRXN0YXRlLk1MUy5CYWNrb2ZmaWNlLlB1YmxpYyIsInNjb3BlIjoiUmVhbEVzdGF0ZS5NTFMuQmFja29mZmljZS5QdWJsaWMuTWFuYWdlIiwianRpIjoiMjU4OTZhYzQtNGI2OC00Njc4LWJkZGEtYjU1MjQ2Y2RhNTE1Iiwic3ViIjoiQ2FzYVllcy5SZW1heC5JbnRlZ3JhdGlvbiIsIm5hbWUiOiJDYXNhWWVzIFJlbWF4IEludGVncmF0aW9uIiwib2lfcHJzdCI6IkNhc2FZZXMuUmVtYXguSW50ZWdyYXRpb24iLCJjbGllbnRfaWQiOiJDYXNhWWVzLlJlbWF4LkludGVncmF0aW9uIiwib2lfdGtuX2lkIjoiODAzMzg2NjQtOWE1ZS00MmNhLTliYzYtMzMzMWNhMTVmN2Y4In00",
        "office-integration-secret": "003_16623336828_5FB1148E-8E71-4CA1-2N89-B3F195882817",
        "listingReferenceId": "20240806-0957"
    }
```

### Example Response

```json
Code: 200
Body:
    {
        "success": true,
        "correlationId": "string",
        "publicId": "string",
        "status": "Processing"
    }
```

```json
Code: 400
Body:
    {
        "success": true,
        "correlationId": "string",
        "publicId": "string",
        "status": "Invalid",
        "errorCode": "string",
        "modelErrors": ["string"]
    }
```

```json
Code: 401
Invalid access token or office integration token!
```