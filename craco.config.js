const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      pages: resolve('src/pages'),
      service: resolve('src/service'),
      component: resolve('src/component')
    }
  }
};
