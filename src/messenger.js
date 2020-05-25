const fetch = require('node-fetch');

const BASE_URL = 'https://graph.facebook.com/v7.0/me/messages';

const sendUrl = (token) => `${BASE_URL}?access_token=${token}`;

const attachment = (id, url) => {
  return {
    recipient: { id },
    message: {
      attachment: {
        type: 'image', 
        payload: {
          url, 
          is_reusable: true
        }
      }
    }
  }
}

const send = (id, url, token) => {
  return new Promise ((resolve, reject) => {
    fetch(sendUrl(token), {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(attachment(id, url))
    })
    .then(res => res.json())
    .then(result => resolve(result))
    .catch(e => reject(e))
  })
}

module.exports = {
  send
}