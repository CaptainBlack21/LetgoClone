// createMetroStatusMiddleware.js

const http = require('http');

const createMetroStatusMiddleware = (projectRoot) => {
  return (req, res, next) => {
    // /status endpoint'ini kontrol et
    if (req.url === '/status') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'Metro server is running', projectRoot }));
    } else {
      next(); // Diğer istekler için normal akışa devam et
    }
  };
};

module.exports = createMetroStatusMiddleware;
