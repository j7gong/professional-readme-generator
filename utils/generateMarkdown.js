const fs = require('fs');

const generateMarkdown = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/readme.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Your README.md file created!'
      });
    });
  });
};

module.exports = {generateMarkdown};
