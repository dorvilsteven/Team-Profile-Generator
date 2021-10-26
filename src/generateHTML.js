const fs = require('fs');
const { resolve } = require('path');

module.exports = (fileContent, styles) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'HTML file generated!'
      });
    });
    fs.writeFile('./dist/css/style.css', styles, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'CSS file generated!'
      });
    });
  });
};