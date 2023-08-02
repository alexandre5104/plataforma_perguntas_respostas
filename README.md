## plataforma_perguntas_respostas

### Descrição
Projeto é uma plataforma de perguntas e respostas utilizando o express.js para construção da api.

### Pré-requisitos

* Node.js versão 16 ou superior;
* Nodemon - npm i -g nodemon.

### Instalando
Antes de você executar o projeto tenha instalado o mysql na sua máquina.

* MySQL (https://www.mysql.com/)

Para instalá-lo em sua máquina faça os comandos a seguir:

``` bash
  git clone git@github.com:alexandre5104/plataforma_perguntas_respostas.git
  cd plataforma_perguntas_respostas
  npm install
  npm start
```

### scripts MySQL


```
    mysql> CREATE DATABASE perguntas_respostasbd;

    mysql> CREATE TABLE ask (
           id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
           title VARCHAR(100) NOT NULL,
           description VARCHAR(100) NOT NULL
           );

    mysql> CREATE TABLE answer (
           id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
           description VARCHAR(100) NOT NULL,
           id_ask INTEGER NOT NULL,
           FOREIGN KEY (id_ask) REFERENCES ask(id)
           );

    mysql> insert into ask (title, description) values ('title 1', 'description 1');
    mysql> insert into ask (title, description) values ('title 2', 'description 2');

    mysql> insert into answer (description, id_ask) values ('description 1', 1);
    mysql> insert into answer (description, id_ask) values ('description 2', 1);
    mysql> insert into answer (description, id_ask) values ('description 2', 2);

```
## Rotas 

### para ASK

#### GET - Buscar todos
```
http://localhost:3000/ask
```

#### GET - Buscar ASK por ID
```
http://localhost:3000/ask/id
```

#### DELETE - Deletando ASK utilizando ID
```
http://localhost:3000/ask/id
```

#### PUT - Atualizando ASK utilizando id
```
http://localhost:3000/ask/id
```

#### POST - Criando ASK
```
http://localhost:3000/ask
```

### para ANSWER

#### GET - Buscar todos
```
http://localhost:3000/answe
```

#### GET - Buscar ANSWER por ID
```
http://localhost:3000/answe/id
```

#### PUT - Atualizando ANSWER utilizando id
```
http://localhost:3000/answe/id
```

#### POST - Criando ANSWER
```
http://localhost:3000/answer/id_ask
```
