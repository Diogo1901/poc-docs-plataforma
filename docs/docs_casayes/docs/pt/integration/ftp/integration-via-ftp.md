# Integração via FTP

## Como Funciona

Este método de integração é classificado como **Integração Completa**, o que significa que deve enviar todos os imóveis de uma agência num único ficheiro. Os imóveis não incluídos neste ficheiro serão considerados para eliminação.

## Convenção de Nomenclatura de Ficheiros

Todos os ficheiros devem ser colocados na pasta raiz do FTP seguindo esta convenção de nomenclatura:

* **OfficeIntegrationSecret**: O segredo de integração para uma determinada agência.
* **Timestamp**: A data e hora no formato ISO 8601. Exemplo: `20230210T032146`.

#### Exemplo de Nome de Ficheiro:

1714828971\_4501E6F1-C5BD-81F0-B50A-1BV8CT4BFYGF-ImportListings-20230210T032146.json

#### Exemplo de Conteúdo do Ficheiro:

`{ "OfficeIntegrationSecret": "string", "Listings": [` [ListingModel](/broken/pages/fKnldiQYhXFA4CFuwMVP) `] }`
## Ligação e Autenticação FTP

| Detalhe        | Informação                                           |
| -------------- | ---------------------------------------------------- |
| **FTP Server** | ftp.casayes.pt                                       |
| **Username**   | (As credenciais serão fornecidas num email separado) |
| **Password**   | (As credenciais serão fornecidas num email separado) |

Certifique-se de utilizar as credenciais fornecidas e de seguir a convenção de nomenclatura de ficheiros para uma integração bem-sucedida. Para mais assistência, contacte a nossa equipa de suporte.