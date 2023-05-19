// Lê o arquivo paises.json
fs.readFile(pathToFile, (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Erro interno do servidor');
      return;
    }
  
    // Analisa o conteúdo JSON
    const paises = JSON.parse(data);
  
    // Limita o número de países a serem retornados
    const paisesLimitados = paises.slice(0, 20);
  
    // Gera a resposta HTTP com o conteúdo JSON limitado
    res.statusCode = 200;
    res.end(JSON.stringify(paisesLimitados));
  });
  