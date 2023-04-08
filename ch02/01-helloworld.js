const http = require('http');
const port = process.env.PORT || 3333;

// roteamento simples com node

// O que é roteamento?
// Mecanismo que serve ao cliente o conteudo que ele solicitou.
// Em aplicações web cliente/servidor, o cliente define,
// o conteudo desejado na URL, especificando o path ou query string

const server = http.createServer((request, response) => {
  // normaliza a url removendo a query string e a barra final
  // e passando para minuscula
  const path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Homepage');
      break;
    case '/about':
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('About');
      break;
    default:
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('Not Found');
      break;
  }
});

server.listen(port, () => console.log(`server started on port ${port} press Ctrl-C to terminate`));
