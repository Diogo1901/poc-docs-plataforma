# Documentação de Integração

Bem-vindo à nossa documentação de integração. Este guia irá ajudá-lo a compreender como enviar a sua informação para a nossa plataforma utilizando dois métodos principais: API e FTP. Ambos oferecem vantagens distintas e podem ser escolhidos de acordo com as suas necessidades e preferências específicas.

## Opções de Integração

### 1. Integração via API

#### Visão Geral

Uma **API (Application Programming Interface)** permite que os seus sistemas comuniquem diretamente com a nossa plataforma. Proporciona uma forma normalizada de enviar e receber dados em tempo real, permitindo uma integração fluida com os nossos serviços.

#### Como Funciona

* **Endpoints:** Interaja com a nossa API através de _endpoints_, que são URLs específicas desenhadas para determinadas funções ou trocas de dados
* **Métodos HTTP:** Os métodos mais comuns incluem:
    * **GET:** Obter dados da nossa plataforma.
    * **POST:** Enviar novos dados para a nossa plataforma.
    * **PUT:** Atualizar dados existentes.
    * **DELETE:** Remover dados da nossa plataforma.
* **Autenticação**: Proteja os seus pedidos à API utilizando chaves API ou tokens OAuth, garantindo que apenas utilizadores autorizados têm acesso aos nossos serviços.

#### Vantagens

* **Troca de Dados em Tempo Real:** Aceda imediatamente à informação mais atualizada.
* **Automação:** Reduza o esforço manual ao automatizar os processos de troca de dados.
* **Flexibilidade:** Integre facilmente várias funções e funcionalidades conforme as suas necessidades.

#### Como Começar

Para começar a utilizar a nossa API, consulte a [Documentação da API](api/imovel/criar.md), onde encontrará instruções detalhadas sobre autenticação, utilização de endpoints e gestão de erros. A nossa equipa de suporte está também disponível para o ajudar com quaisquer dúvidas ou requisitos técnicos.

### 2. Integração via FTP

#### Visão Geral

O **FTP (File Transfer Protocol)** é um protocolo padrão para a transferência de ficheiros entre computadores através de uma rede. É um método eficaz para o envio de grandes volumes de dados em processos por lote (batch).

#### Como Funciona

* **Transferência de Ficheiros**: Carregue os seus ficheiros de dados para o nosso servidor FTP utilizando o seu cliente FTP preferido.
* **Ligação Segura**: Utilize ligações seguras (SFTP) para garantir que os seus dados são encriptados durante a transferência.
* **Transferências Agendadas**: Configure horários automáticos para transferências regulares de dados para a nossa plataforma.

#### Vantagens

* **Suporte para Ficheiros de Grande Dimensão**: Transfira facilmente ficheiros grandes ou grandes volumes de dados.
* **Processamento por Lote**: Ideal para transferir dados em blocos, reduzindo a necessidade de conectividade constante.
* **Simplicidade**: Configuração e operação simples, acessível a utilizadores com diferentes níveis de experiência técnica.

#### Como Começar

Para começar a utilizar o FTP, irá necessitar do endereço do servidor FTP, nome de utilizador e palavra-passe, que podem ser fornecidos pela nossa equipa de suporte. Instruções detalhadas sobre a configuração do seu cliente FTP e a definição de transferências agendadas estão disponíveis no nosso [Guia de Integração FTP](ftp/integracao-via-ftp.md).

## Conclusão

A escolha entre integração via API e integração via FTP depende das necessidades específicas do seu negócio, do volume de dados e do fluxo de trabalho preferido. Ambos os métodos são suportados pela nossa plataforma e podem ser adaptados para responder aos seus requisitos. Para mais assistência, contacte a nossa equipa de suporte, que terá todo o prazer em ajudá-lo a escolher a melhor estratégia de integração e em apoiar o processo de configuração e resolução de problemas.