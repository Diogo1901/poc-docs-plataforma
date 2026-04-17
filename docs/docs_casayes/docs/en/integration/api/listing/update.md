# Update

`api/v1/Listing/Update`

**Description**: Request for a listing that has been previously created to be updated using the provided schema.

### Method `PUT`

### Headers

<table><thead><tr><th width="241">Name</th><th width="128">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>Authorization</code></td><td><code>string</code></td><td>Bearer token used to authenticate your API request. Include the token in the format <code>Bearer YOUR_API_KEY</code>.</td></tr><tr><td><code>office-integration-secret</code></td><td><code>string</code></td><td>Integration secret for a given office.</td></tr><tr><td><code>listingReferenceId</code></td><td><code>string</code></td><td>Reference Id of the listing to be updated.</td></tr></tbody></table>

### Body application/json [ListingModel](../../schemas/listing-schema.md)

### Example Request

```json
Method: PUT
Headers:
    {
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZGODU0MEQyMzVGOTRBNjU3OUZENjM4RDQ5REE0NzVBODY5QzYzQ0EiLCJ4NXQiOiJiNFZBMGpYNVNtVjVfV09OU2RwSFdvYWNZOG8iLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL2xvZ2luLWRldi5jYXNheWVzLnB0LyIsImV4cCI6MTcyMjk0MTI2MywiaWF0IjoxNzIyOTM3NjYzLCJhdWQiOiJSZWFsRXN0YXRlLk1MUy5CYWNrb2ZmaWNlLlB1YmxpYyIsInNjb3BlIjoiUmVhbEVzdGF0ZS5NTFMuQmFja29mZmljZS5QdWJsaWMuTWFuYWdlIiwianRpIjoiMjU4OTZhYzQtNGI2OC00Njc4LWJkZGEtYjU1MjQ2Y2RhNTE1Iiwic3ViIjoiQ2FzYVllcy5SZW1heC5JbnRlZ3JhdGlvbiIsIm5hbWUiOiJDYXNhWWVzIFJlbWF4IEludGVncmF0aW9uIiwib2lfcHJzdCI6IkNhc2FZZXMuUmVtYXguSW50ZWdyYXRpb24iLCJjbGllbnRfaWQiOiJDYXNhWWVzLlJlbWF4LkludGVncmF0aW9uIiwib2lfdGtuX2lkIjoiODAzMzg2NjQtOWE1ZS00MmNhLTliYzYtMzMzMWNhMTVmN2Y4In00",
        "office-integration-secret": "003_16623336828_5FB1148E-8E71-4CA1-2N89-B3F195882817",
        "listingReferenceId": "20240806-0957"
    }
Body:
{
"type": "Apartment",
    "reference": "20240806-0957",
    "referenceURL": "https://officeWebsite/listing/1234.com",
    "address": {
        "visibility": true,
        "street": "Rua do Rosário",
        "floor": "3",
        "town": "Porto",
        "doorNumber": 22,
        "country": "Portuguese",
        "coordinates": {
            "latitude": 41.15020166998078,
            "longitude":  -8.620982818615062
        }
    },
    "contact": {
        "name": "John",
        "email": "john.smith@gmail.com",
        "phonePrefix": 351,
        "phone": 919111222
  },
    "attributes": {
        "plotArea": 101,
        "builtArea": 170,
        "totalArea": 200,
        "usableArea": 150,
        "floors": 5,
        "characteristics": [
            "BoxGarage",
            "OutdoorParking",
            "ElectricCarsCharging",
            "SharedGarage"
        ],
        "depositMonths": 4,
        "parking": true,
        "parkingCapacity": 4,
        "builtYear": 2009,
        "conservation": "New",
        "energyCertificateRating": "APlus",
        "energyCertificatePerformance": 11576663124.0,
        "bathrooms": 2,
        "bedrooms": 4,
        "rooms": 6,
        "parkingIncludedInPrice": false,
        "parkingPrice": 2000,
        "minimalStay": 4,
        "availableFrom": "2023-03-03T12:25:09",
        "minAge": 10,
        "maxAge": 60,
        "bankProperty": false,
        "elevator": true,
        "landRegister": "abcd",
        "treasuryLandRegister": "abcd",
        "houseLicensing": "A7X2Y9Z3C8B5N4M6Q1R0F7T9W3E8L6K4J2H1G5D7S9P3O8",
        "condominiumValue": 650
    },
    "operation": {
        "price": 400000,
        "privatePrice": false,
        "priceGranularity": "Daily",
        "type": "Buy",
        "sharingCommission": 22,
        "sharingCommissionType": "Percentage"
    },
    "descriptions": [
        {
            "language": "Portuguese",
            "mainText": "Bem-vindo à Rua do Rosário, o local onde a tradição encontra a modernidade! Este charmoso e pitoresco espaço em Porto oferece uma experiência única, com suas ruas de paralelepípedos e arquitetura encantadora. Este imóvel listado é uma joia escondida, perfeita para quem busca um ambiente autêntico. O apartamento em questão é uma mistura harmoniosa de estilo contemporâneo e toques históricos. Com espaços luminosos e bem iluminados, este lar proporciona conforto e uma atmosfera acolhedora. Os detalhes arquitetônicos preservados adicionam um charme especial, enquanto as comodidades modernas garantem uma estadia conveniente. Localizado no coração de Porto, este imóvel oferece fácil acesso a restaurantes locais, lojas encantadoras e pontos turísticos históricos. Desfrute da vida noturna animada nas proximidades ou dê um passeio relaxante pelas ruas tranquilas. Se você procura uma experiência autêntica em Porto, este anúncio na Rua do Rosário é a escolha perfeita. Reserve agora e mergulhe na beleza e na energia única deste destino encantador!"
        },
        {
            "language": "English",
            "mainText": "Welcome to Rosário Street, where tradition meets modernity! This charming and picturesque space in Porto offers a unique experience with its cobblestone streets and delightful architecture. This listed property is a hidden gem, perfect for those seeking an authentic environment. The featured apartment is a harmonious blend of contemporary style and historical touches. With bright and well-lit spaces, this home provides comfort and a welcoming atmosphere. Preserved architectural details add a special charm, while modern amenities ensure a convenient stay. Located in the heart of Porto, this property offers easy access to local restaurants, charming shops, and historical landmarks. Enjoy the lively nightlife nearby or take a relaxing stroll through the quiet streets. If you're looking for an authentic experience in Porto, this listing on Rosário Street is the perfect choice. Book now and immerse yourself in the beauty and unique energy of this charming destination!"
        }
    ],
    "rooms": [
        {
            "type": "LivingRoom",
            "usableArea": 0,
            "heigth": 0,
            "width": 0
        },
        {
            "type": "Kitchen",
            "usableArea": 20,
            "heigth": 5,
            "width": 4
        }
    ],
    "images": [
        {
            "order": 1,
            "url": "https://image-url/1234.jpg"
        },
        {
            "order": 2,
            "url": "https://image-url/1234.jpg"
        }
    ],
    "videos": [        {
            "order": 1,
            "url": "https://video-url/1234.jpg"
        }],
    "buildingName": "New building",
    "privateNotes": "Private notes text"
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