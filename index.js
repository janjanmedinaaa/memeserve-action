const core = require('@actions/core');
const github = require('@actions/github');

try {
  var userId = core.getInput('user-messenger-id');
  var imageSrc = core.getInput('image-src');
  var imageDescription = core.getInput('image-description');

  console.log('User ID', userId);
  console.log('Image Source', imageSrc);
  console.log('Image Description', imageDescription);

  core.setOutput('file-io-url', 'https://file.io/test');

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}