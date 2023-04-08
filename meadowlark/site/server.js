const express = require('express');

const app = express();
const port = process.env.PORT || 3333;

// app.METHOD recebe um path e um callback
// o path define a rota(não é case sensitive)
// quando a rota for encontrada, o callback é chamado
// o callback recebe dois parametros: objetos de requisição e resposta.
app.get('/', (request, response) => {
  response.type('text/plain');
  response.send('Meadowlark Travel');
});
app.get('/about', (request, response) => {
  response.type('text/plain');
  response.send('About Meadowlark Travel');
});

// app.use é o metodo que o express adiciona middleware
// a ordem que as rotas e middleware estão IMPORTA
app.use((request, response) => {
  response.type('text/plain');
  response.status(404);
  response.send('404 - not found');
});

app.use((error, request, response, next) => {
  console.error(error);
  response.type('text/plain');
  response.status(505);
  response.send('505 - internal error');
});

app.listen(port, () => console.log(`express started on http://localhost:${port} press Ctrl-C to terminate`));
