const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3333;

// servindo recursos estáticos
// O que é um arquivo estatico?
// são arquivos que não mudam
// ao contrario de um cotador de ações, sempre que
// a pagina é carregada, os preços das ações podem ter mudado

function staticFiles(response, path, contentType, responseCode = 200) {
  // __dirname sera resolvido para o caminho em que o script reside
  fs.readFile(__dirname + path, (error, data) => {
    // readFile vai ler o arquivo, e ao terminar a tarefa, ira chamar o callback
    // se houver problemas de permissão na sua leitura
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('Internal Error');
    }
    response.writeHead(responseCode, { 'Content-Type': contentType });
    response.end(data);
  });
}

const server = http.createServer((request, response) => {
  // normaliza a url removendo a query string e a barra final
  // e passando para minuscula
  const path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch (path) {
    case '':
      staticFiles(response, '/public/home.html', 'text/html');
      break;
    case '/about':
      staticFiles(response, '/public/about.html', 'text/html');
      break;
    case '/img/logo.png':
      staticFiles(response, '/public/img/logo.png', 'image/png');
      break;
    default:
      staticFiles(response, '/public/404.html', 'text/html', 404);
      break;
  }
});

server.listen(port, () => console.log(`server started on port ${port} press Ctrl-C to terminate`));
