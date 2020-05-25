const message = (id, text) => {
  return {
    recipient: { id },
    message: { text }
  }
}

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

const action = (id, action) => {
  return {
    recipient: { id },
    sender_action: action
  }
}

module.exports = {
  message,
  attachment,
  action
}