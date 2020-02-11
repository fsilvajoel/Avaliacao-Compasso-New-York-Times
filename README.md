# Compasso Times

portal utilizando Angular CLI version 9.0.1. para a exibição de notícias consumindo a api do THE NEW YORK TIMES.

## Installation

Use o [npm](https://nodejs.org/en/download/) para instalar as dependências do projeto.

```bash
npm install -g @angular/cli
```
Instale as dependências do projeto:
```bash
npm install 
```

## Utilização:
```bash
ng serve --open
```
Navegue até 
```
http://localhost:4200/
```
## Ferramentas Escolhidas
Para realizar a tarefa do desafio, foi pensado um layout simples, que trouxesse facilidade e agilidade na hora de navegar entre as funcionalidades. Foi adotado uma estrutura de cores mais neutras, aproximando-se a característica do jornal New York Times. 

A aplicação se baseou em cards, esses capazes de exibir os conteúdos de forma limpa e simplificada, reduzindo assim a sensação de "desorganização" quando há muito conteúdo disponível.

Foi elencado o Materialize css como framework de interface. A escolha se deu por ele apresentar aspectos arrojados em sua estrutura e por possuir uma folha de estilos e estrutura de componentes extremamente enxuta. 
É importante ressaltar que o Materialize css não é otimizado para o uso em frameworks de desenvolvimento como o Angular, trazendo dificuldades com a manipulação de alguns recursos dependentes do Jquery ou JS, sendo interessante buscar outras alterativas no que se diz respeito a "ações".

Foi tentado explorar a biblioteca "jw-angular-pagination", para paginar as notícias, no entanto não foi possível entregar a aplicação com essa feature em funcionamento.

Os componentes "listTechnology" e "ListScience" são responsáveis por listar as notícias (de forma separada) conforme suas respectivas categorias. Esses componentes encontram o HTTP Client [newsService](src/app/news.service.ts) do qual possui a lógica de conexão com a API do jornal americano. As requisições referente às categorias foram feitas de forma separada, visando trazer para a borda da rede, o mínimo possvel de tratamento de dados.

