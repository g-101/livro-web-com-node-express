const express = require('express');
const expressHandlebars = require('express-handlebars'); // view engine

const app = express();
const port = process.env.PORT || 3333;

// O que são Views?
// qualquer coisa que pode ser renderizada no lado do cliente
// pdf, html, png
app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// O que são arquivos estaticos?
// arquivos sem nenhum tipo de manipulação
// css, imagens, javascript do lado do cliente
app.use(express.static(__dirname + '/public'));

// app.METHOD recebe um path e um callback
// o path define a rota(não é case sensitive)
// quando a rota for encontrada, o callback é chamado
// o callback recebe dois parametros: objetos de requisição e resposta.
app.get('/', (request, response) => response.render('home'));
app.get('/about', (request, response) => response.render('about'));

// app.use é o metodo que o express adiciona middleware
// a ordem que as rotas e middleware estão IMPORTA
app.use((request, response) => {
  response.status(404);
  response.render('404');
});
app.use((error, request, response, next) => {
  console.error(error.message);
  response.status(505);
  response.render('505');
});

app.listen(port, () => console.log(`express started on http://localhost:${port} press Ctrl-C to terminate`));
