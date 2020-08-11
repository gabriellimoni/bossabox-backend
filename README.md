# Bossabox Backend 

Projeto backend de desafio para o [Bossabox](https://bossabox.com/).

# Descrição

API para criação, listagem e deleção de ferramentas úteis com suporte a criação e autenticação simples de usuários.

### Instalação

Primeiramente, configure seu arquivo de variáveis de ambiente `.env`.
Para isso, copie e cole o arquivo `.env.example` para `.env` e remova a primeira linha. Pronto, variáveis ambiente padrões configuradas.
Em seguida, basta rodar o comando `docker-compose up --build` e o ambiente de desenvolvimento está pronto e rodando.
É possível rodar o projeto sem docker também, porém será preciso realizar maiores configurações.

### Documentação  
  
A documentação encontra-se no diretório `docs`.
Para utilizá-la, você pode copiar o conteúdo do arquivo `swagger.json` em um [editor Swagger](https://editor.swagger.io/), ou acessar o diretório e executar os comandos `npm install` e `node index.js` que a documentação estará disponível na posta `5000` da sua máquina.

### Deploy

O processo de implantação está configurado para ser executado no ambiente do [Github Actions](https://docs.github.com/en/actions), sendo a API hospeda no PaaS [Google App Engine](https://cloud.google.com/appengine), utilizando o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) como DBaaS.

### Tecnologias

A API foi desenvolvida utilizando Typescript, Express e MongoDB.