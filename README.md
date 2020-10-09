# Github Explorer
![enter image description here](https://github.com/Kwan13/github-explorer/blob/d9a899ce5be751d5aff4511779b820307379c374/web/src/assets/2020-10-09%2012.59.54.gif)
Github explorer permite ao usuário pesquisar por repositórios no Github e obter suas principais informações como numero de forks, estrelas e issues, além de acesso direto às últimas issues abertas.

### Tecnologia utilizadas

- Typescript
- React
- NodeJS
- TypeORM
- postgres

### Como executar?

#### Backend:

1.  _**Criando container do Docker**_.

	Baixe e instale o [Docker](https://www.docker.com/products/docker-desktop) em seu computador, após isso cole o comando abaixo no terminal para criar um container do postgres.
	```
	docker run --name github_profile -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
	```
	Você pode alterar as configurações de acesso ao banco de dados no arquivo "ormconfig.json" disponível em "./backend/ormconfig.json".

2. _**Inicializando Backend**_.
	
	Antes de qualquer coisa baixe as dependências do backend utilizando o comando:
	```
	yarn	
	```
	após baixar as dependências execute as "migrations" para que o banco de dados seja construído:
	```
	yarn typeorm migration:run
	```
	por fim execute o comando abaixo para iniciar o servidor:
	```
	yarn dev
	```
<hr/>

#### Frontend:

1. _**Inicializando Frontend**_.

	Baixe as dependências do front-end utilizando o comando:
	```
	yarn	
	```
2. _**Inicializando Backend**_.

	Execute o comando abaixo para iniciar o servidor:
	```
	yarn start
	```

Figma do projeto [aqui!](https://www.figma.com/file/HOCmxfrElzLpI75LdzFLia/Github-Explorer?node-id=0%3A1)
