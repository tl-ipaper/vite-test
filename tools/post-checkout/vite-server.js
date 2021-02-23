const { createServer } = require('vite');

(async () => {
  const server = await createServer({
    configFile: false,
    root: __dirname,
    server: {
      force: true
    }    
  })
  await server.listen();
  await server.close();
})();