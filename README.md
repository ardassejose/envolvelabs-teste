
# Envolve Labs – José Víctor Ardasse

## Escopo do projeto

Você precisará montar uma pequena aplicação SPA onde irá consultar uma API para a leitura de peças de xadrez.

O projeto consiste em 3 containers que compartilham informações entre si através de uma contexto global criado através de um ContextAPI.

![Screenshot da SPA]()


## Rodando localmente o projeto

Clone o projeto

```bash
  git clone https://www.github.com/ardassejose/envolvelabs-teste
```

Go to the project directory

```bash
  cd envolvelabs-teste
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor Node.js

```bash
  node src/api/api.cjs
```

Inicie o seu localhost

```bash
  npm run start
```

O projeto irá rodar na porta 5173 do seu navegador

```
http://localhost:5173
```

## Não conseguiu rodar o servidor? Veja

Para que a aplicação possa ser exibida corretamente, precisamos instalar o nosso servidor. O servidor foi configurado dentro da pasta *src* para melhor entendimento do projeto. 

Para iniciar, utilize o terminal para instalar as dependências do Express, CORS e Path

#### Comando para instalar dependências do servidor

```
npm install express cors path
```

Após a instalação, você conseguirá executar o servidor. Note que na API o CORS faz uma referência de uso para a porta 5173, que é onde o projeto irá rodar.

#### Escreva no terminal

```
node src/api/api.cjs
```

A resposta será praticamente imediata: *Server started on port 3000*


## Features

- Responsividade em diversos tamanhos de telas
- Adicionar cartão para uma nova coluna
- Remover um item em específico
- Ver o total de peças selecionadas
- Ver o valor total da soma de cada peças
- Resetar todos os valores para reiniciar a aplicação
- Props globais para serem utilizadas com ContextAPI


## Lições aprendidas

Nesse projeto a maior lição aprendida foi dominar o conceito de props globais com Context API. 

Ter entendido de vez esse conceito foi o principal fator para que minha aplicação pudesse ser feita de maneira direta ao ponto e sem prop drilling.

Sem dúvidas foi uma grande oportunidade poder rever diversos conceitos de styled-components, useContext, useEffect, entre outros.