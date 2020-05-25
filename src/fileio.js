const fetch = require('node-fetch');
const FormData = require('form-data');

  const upload = async (buffer) => {
  var formData = new FormData();
  formData.append('file', buffer, { filename : 'image.png' });

  return new Promise((resolve, reject) => {
    fetch('https://file.io', {
      method: 'POST',
      body: formData,
      headers: formData.getHeaders()
    })
    .then(res => res.json())
    .then(json => resolve(json))
    .catch(e => reject(e));
  })
}

module.exports = {
  upload
}