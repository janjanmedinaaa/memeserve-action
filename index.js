const Jimp = require('jimp');
const core = require('@actions/core');
const github = require('@actions/github');

const Default = require('./src/default');
const editor = require('./src/editor');

try {
  var {
    userId,
    imageSrc,
    imageDescription
  } = github.context.payload.client_payload

  let source = imageSrc || Default.MIKE_WAZOWSKI
  let message = imageDescription || Default.ERROR_INCOMPLETE

  editor.getImage(source)
    .then(image => editor.resizeImage(image))
    .then(resizeImage => editor.attachToCanvas(resizeImage, message))
    .then(canvas => editor.writeToCanvas(canvas))
    .then(writtenCanvas => writtenCanvas.getBufferAsync(Jimp.MIME_PNG))
    .then(buffer => {
      core.setOutput('file-io-url', 'https://file.io/test');
      console.log('Created Buffer:', buffer);
    })
} catch (error) {
  core.setFailed(error.message);
}