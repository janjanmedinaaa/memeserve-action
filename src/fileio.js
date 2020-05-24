const fetch = require('node-fetch');
const FormData = require('form-data');
const { createReadStream } = require('fs');

const upload = (buffer) => {
  const stream = createReadStream('./images/chow.jpg');

  fetch('https://file.io', {
    method: 'POST',
    body: { file: buffer }
  })
  .then(res => res.json())
  .then(function(json) {
    console.log(json);
  });
}

module.exports = {
  upload
}