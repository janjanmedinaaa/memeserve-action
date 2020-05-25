const fetch = require('node-fetch');
const format = require('./format');

const BASE_URL = 'https://graph.facebook.com/v7.0/me/messages';

const sendUrl = (token) => `${BASE_URL}?access_token=${token}`;

const send = (id, url, token) => {
  return new Promise ((resolve, reject) => {
    fetch(sendUrl(token), {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(format.attachment(id, url))
    })
    .then(res => res.json())
    .then(result => resolve(result))
    .catch(e => reject(e))
  })
}

const action = (user, action) => {
  return new Promise ((resolve, reject) => {
    fetch(sendMessageUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(format.action(user, action))
    })
    .then(res => res.json())
    .then(result => resolve(result))
    .catch(e => reject(e));
  });
}

module.exports = {
  send,
  action
}