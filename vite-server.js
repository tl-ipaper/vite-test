const { createServer } = require('vite');

;(async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    root: __dirname,
    server: {
      port: 1337,
      force: true
    }    
  })
  await server.listen();
  await server.close();
})();