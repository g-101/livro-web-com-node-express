const http = require('http');
const port = process.env.PORT || 3333;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World!');
});

server.listen(port, () => console.log(`server started on port ${port} press Ctrl-C to terminate`));

// programação baseada em eventos do servidor
// aqui o evento é a requisição http na linha 4 http.createServer
// recebe um callback como argumento, que sera chamado em qualquer requisição http
// configura o conteudo como texto puro e enviar a string como resposta "Hello World!"

// O que é roteamento?
// Mecanismo que serve ao cliente o conteudo que ele solicitou
// Em aplicações web cliente/servidor, o cliente define o conteudo desejado na URL
// especificando o path ou query string
