const Jimp = require('jimp');
const core = require('@actions/core');
const github = require('@actions/github');

const Default = require('./src/default');
const editor = require('./src/editor');
const fileIO = require('./src/fileio');
const messenger = require('./src/messenger');

(async function() {
  try {
    let {
      userId,
      imageSrc,
      imageDescription,
      accessToken
    } = github.context.payload.client_payload
  
    let source = imageSrc || Default.MIKE_WAZOWSKI
    let message = imageDescription || Default.ERROR_INCOMPLETE
  
    let downloadImage = await editor.getImage(source)
    let resizeImage = await editor.resizeImage(downloadImage)
    let canvas = await editor.attachToCanvas(resizeImage, message)
    let writtenCanvas = await editor.writeToCanvas(canvas)
    let imageBuffer = await writtenCanvas.getBufferAsync(Jimp.MIME_PNG)

    let fileUpload = await fileIO.upload(imageBuffer);
    await messenger.send(userId, fileUpload.link, accessToken);
    core.setOutput('file-io-url', fileUpload.link);
  } catch (error) {
    core.setFailed(error.message);
  }
})()