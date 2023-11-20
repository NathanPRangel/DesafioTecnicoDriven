# DesafioTecnicoDriven
LinkDeploy = https://desafiotecnicodriven.onrender.com

Desafio Técnico - Aposta Quanto?

Simulação de Aplicação Backend para o Desafio de Posição Técnica Júnior Backend Node

Sobre o Projeto

Este projeto é uma aplicação backend para um sistema de apostas utilizado por uma casa de apostas. O objetivo é automatizar os processos da casa de apostas para competir com outras aplicações de apostas.

Tecnologias Utilizadas

As seguintes tecnologias foram utilizadas para desenvolver este projeto:

Node
Expressar
Texto datilografado
Prisma
Postgres
Jest e Supertest
Como Funciona

Este projeto é uma API REST que serve um sistema de apostas para uma casa de apostas. Possui três entidades:

Participantes
Jogos
Apostas
Entidade Participantes

Foram criadas duas rotas para a entidade participantes:

POST /participantes: Esta rota cria um novo participante no sistema.
GET /participantes: Esta rota recupera uma lista de todos os participantes no sistema.
Entidade Jogos

Foram criadas quatro rotas para a entidade jogos:

POST /jogos: Esta rota cria um novo jogo no sistema.
POST /jogos/:id/terminar: Esta rota marca um jogo como terminado.
GET /jogos: Esta rota recupera uma lista de todos os jogos no sistema.
GET /jogos/:id: Esta rota recupera um jogo específico pelo seu ID.
Entidade Apostas

Foi criada apenas uma rota para a entidade apostas:

POST /apostas: Esta rota coloca uma aposta em um jogo.
Como Executar e Configurar para Desenvolvimento e Testes

Clone este repositório.
Instale todas as dependências com o comando: npm i.
Configure os arquivos .env.development e .env.test usando o arquivo .env.example.
Execute todos os scripts para executar migrações:
npm run dev:migration:run
npm run test:migration:run
npm run dev:migration:generate
npm run test:migration:generate
Execute o backend em um ambiente de desenvolvimento: npm run dev
Como Executar Testes

Após configurar o arquivo .env.test usando o arquivo .env.example e executar o script de migração do banco de dados para o ambiente de teste, use o seguinte comando no terminal: npm run test
Compilação e Inicialização para Produção

Compilar a aplicação com o comando: npm run build
Iniciar a aplicação em modo de produção com o comando: npm start
O que fazer ao adicionar novas VARIÁVEIS DE AMBIENTE

Adicione as novas VARIÁVEIS DE AMBIENTE ao arquivo .env.example.
Adicione as novas VARIÁVEIS DE AMBIENTE aos seus arquivos .env.development e .env.test locais.
Aqui está uma explicação de cada entidade:

Participantes: Representam as pessoas que apostam em jogos.
Jogos: Representam os jogos em que as pessoas podem apostar.
Apostas: Representam as apostas que as pessoas fazem em jogos.