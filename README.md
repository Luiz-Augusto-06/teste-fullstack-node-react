# teste-fullstack-node-react

# Teste fullstack

Leia primeiro todo o projeto, faça sua estimativa de horas para o desenvolvimento e envie um email com o título `[Teste Fullstack] Estimativa` para rh@4.events

Forke este projeto, faça o desenvolvimento e quando finalizar faça um PR aqui. Envie um email com o título `[Teste Fullstack] Finalizado` para rh@4.events com o link do seu PR.

Se você não sabe o que é fazer um "Forke" ou um "PR", pesquise. Valorizamos muito a proatividade.

**Lembre-se: atualize este README informando como instalar e executar seu projeto.**

## Missão backend

Desenvolver uma **API JSON RESTful** em **Node**, que utilize os métodos `GET` e `POST`.

Faça o teste unitário da **API** (Bônus :star:)
### Especificação

Monte uma base de veículo com a seguinte estrutura:

```
veiculo:   string
ano:       integer
descricao: text
vendido:   bool
created:   datetime
```

Utilize **MongoDB** ou **MySQL** para armazenar os dados que a **API** irá consumir.

### API endpoints

`GET /veiculos`

Retorna todos os veículos

---

`GET /veiculos/find`

Retorna os veículos de acordo com o termo passado parâmetro `q`

---

`POST /veiculos`

Adiciona um novo veículo


## Missão frontend

Desenvolver uma **UI (User Interface)** de acordo com o desenho que está na pasta [layout]

### Especificação

- Cross browser support (IE11+)
- Consumir **API** criada acima
- Criar uma tela que tenha...
    - Listagem de veículos
    - Busca
    - Formulário de novo veículo

### Dica

Tente pensar um pouco fora da caixa;

Utilizar Context API ou Redux será um diferencial;

Utilize algum framework para auxiliar no desenvolvimento da interface, por exemplo:

- https://getmdl.io/
- http://getbootstrap.com/css/
- http://foundation.zurb.com/

## Dúvida

Se tiver qualquer dúvida sobre esse teste, envie um email com o título `[Teste Fullstack] O assunto que vc deseja` para rh@4.events


# Teste Fullstack Concluído

## Desenvolvido por Luiz Augusto

## Tentei completa o desafio porém atuou na área de Front-end.


## Software Usado para desenvolver
 Spck Editor app(Celular)

    ###Ideal para executar
    1- MySQL
    2- Visual Studio ( Outro editor da sua preferência)
     
## Instalação
    Ideal para executar
    ### Backend
        1- Usar npm ou yarn (Qualquer um dos dois ) para fazer a instalação das bibliotecas.
        
## Linguagem Usadas no Projeto
     1- ReactJs

    ### Ideal para executar
     1- Usar Node.js para Back-end e React Js para Front-end

## Bibliotecas Usadas no Projeto:
  1- React-dom
  2- React

## Bibliotecas Para o Software ser executado :
 ### Backend 
    1- express
    2- mysql
    3- nodemon
    4- cors
  ###Observação importante: instalar a biblioteca - SEQUELIZE - caso use os arquivos:
     1-CreateTableSql.js 
     2-ConnectBd.js

  ### FrontEnd
    1- Axios
    2- React-dom
    3- React-router-dom

## Framework Usado
    1- Bootstrap 4/5
    2- Icons - FonteAwesome 4.7

## Funcionalidade
       1- Fazer buscas de uma lista de automóveis
       2- Listagem de veículos Adicionados
       3- Adicionar um novo Veículo
       4 - Pode editar ou excluir veículos que foram adicionado

## Modificar dados
  1- Na pasta Server , no arquivo index.js, exite o seguinte código:

   ### const db = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "password",
            database: "automoveis",
     });

    ### Mudar para :
            user: "seu root do MySQL",
            password: "senha do seu MySQL",
    
   ### Mudar a porta 8000 para uma porta que use

## Criação da tabela de dados
 1- Existe um arquivo chamado "creatTableMyslq" que pode ajudar na hora de criar a tabela no MySQL
 2- Outro modo de criar:
    instalar a biblioteca no Node.js - SEQUELIZE - caso use os arquivos:
        1-CreateTableSql.js 
        2-ConnectBd.js
    
## Documentação para ajuda:
1- Bootstrap - https://getbootstrap.com/

2- ReactJs - https://react-bootstrap.github.io/
E
https://pt-br.reactjs.org/

3- Icons - https://fontawesome.com/v4/icons/


## Observação importante :
Não obtinha conhecimento sobre a linguagem Node.js mas através do projeto tive  conhecimento sobre a linguagem e consegui aprender algo sobre.
Tenho limitações de infraestrutura (não possuo notebook ou computador) e por isso realizei o projeto através do celular. Por desenvolver através do celular fiquei limitado em vários requisitos como bibliotecas, Backend, entrei outros aspectos e por isso não pude testar o projeto por completo, ( O projeto foi testado na parte de ReactJs, mas com limitações ) porém tenho o conhecimento técnico para fazer e desenvolver.
 
## Obrigado por me proporcionar esse desafio, obtive muito conhecimento através desse projeto.





