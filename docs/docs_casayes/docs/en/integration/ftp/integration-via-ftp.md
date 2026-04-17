# Integration via FTP

## How It Works

This integration method is classified as a **Full Integration**, which means you must send all the listings of an office in a single file. Listings not included in this file will be considered for deletion.

## File Naming Convention

All files must be placed in the FTP root folder following this naming convention:

* **OfficeIntegrationSecret**: The integration secret for a given office.
* **Timestamp**: The date and time in ISO 8601 format. Example: `20230210T032146`.

#### Example Filename:

1714828971\_4501E6F1-C5BD-81F0-B50A-1BV8CT4BFYGF-ImportListings-20230210T032146.json

#### Example File Content:

`{ "OfficeIntegrationSecret": "string", "Listings": [` [ListingModel](../schemas/listing-schema.md) `] }`

## FTP Connection & Authentication

| Detail         | Information                                        |
| -------------- | -------------------------------------------------- |
| **FTP Server** | ftp.casayes.pt                                     |
| **Username**   | (Credentials will be provided in a separate email) |
| **Password**   | (Credentials will be provided in a separate email) |

Ensure to use the provided credentials and adhere to the file naming convention for successful integration. For further assistance, please contact our support team.