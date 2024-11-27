// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const createMetroStatusMiddleware = require('./createMetroStatusMiddleware'); // doğru yolu ekleyin

const config = getDefaultConfig(__dirname);

// Sunucuya özel middleware ekleme
config.server = {
  enhanceMiddleware: (middleware, server) => {
    return (req, res, next) => {
      const metroMiddleware = createMetroStatusMiddleware(__dirname);
      metroMiddleware(req, res, () => middleware(req, res, next));
    };
  },
};

module.exports = config;
