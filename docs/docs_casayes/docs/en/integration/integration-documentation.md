# Integration Documentation

Welcome to our integration documentation. This guide will help you understand how to send your information to our platform using two primary methods: API and FTP. Both methods offer unique advantages and can be chosen based on your specific needs and preferences.

## Integration Options

### 1. API Integration

#### Overview

An **API (Application Programming Interface)** allows your systems to communicate directly with our platform. It provides a standardized way to send and receive data in real-time, enabling seamless integration with our services.

#### How It Works

* **Endpoints**: You interact with our API through endpoints, which are specific URLs designed for particular functions or data exchanges.
* **HTTP Methods**: Common methods include:
    * **GET**: Retrieve data from our platform.
    * **POST**: Send new data to our platform.
    * **PUT**: Update existing data.
    * **DELETE**: Remove data from our platform.
* **Authentication**: Secure your API requests using API keys or OAuth tokens to ensure that only authorized users can access our services.

#### Benefits

* **Real-Time Data Exchange**: Access the most up-to-date information instantly.
* **Automation**: Reduce manual effort by automating data exchange processes.
* **Flexibility**: Easily integrate various functions and features to suit your needs.

#### Getting Started

To begin using our API, refer to our [API documentation](api/listing/create.md) for detailed instructions on authentication, endpoint usage, and error handling. Our support team is also available to assist you with any questions or technical requirements.

### 2. FTP Integration

#### Overview

**FTP (File Transfer Protocol)** is a standard protocol for transferring files between computers over a network. It is an effective method for sending large volumes of data in batch processes.

#### How It Works

* **File Transfer**: Upload your data files to our FTP server using your preferred FTP client.
* **Secure Connection**: Use secure FTP connections (SFTP) to ensure your data is encrypted during transfer.
* **Scheduled Transfers**: Set up automated schedules for regular data transfers to our platform.

#### Benefits

* **Large File Support**: Easily handle large files or bulk data transfers.
* **Batch Processing**: Ideal for transferring data in batches, reducing the need for constant connectivity.
* **Simplicity**: Straightforward setup and operation, making it accessible for users with varying technical expertise.

#### Getting Started

To start using FTP, you will need the FTP server address, username, and password, which can be provided by our support team. Detailed instructions on configuring your FTP client and scheduling transfers are available in our [FTP integration guide](ftp/integration-via-ftp.md).

## Conclusion

Choosing between API and FTP integration depends on your specific business needs, data volume, and preferred workflow. Both methods are supported by our platform and can be tailored to fit your requirements. For further assistance, please contact our support team, who will be happy to help you choose the best integration strategy and assist with setup and troubleshooting.