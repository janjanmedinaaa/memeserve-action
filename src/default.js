/**
 * Error Messages and Images
 */
const MIKE_WAZOWSKI = './images/mike.jpg';
const MR_CHOW_TINY = './images/chow.jpg';
const WHY = './images/why.gif';
const ERROR_INCOMPLETE = 'When you use a meme generator and forgot to include the message';
const ERROR_PORTRAIT_IMAGE = 'When you use a meme generator and use a portrait image';
const ERROR_IMAGE_TOO_SMALL = 'When you use a meme generator and use a tiny image';
const ERROR_INVALID_IMAGE = 'When you use a meme generator and include an unavailable image';

/**
 * Server Configuration
 */
const PORT = 4000

/**
 * Output Image Configuration
 */
const CANVAS_WIDTH = 1000
const CANVAS_BACKGROUND = '#FFFFFF'
const MARGIN_TOTAL = 40
const MARGIN = MARGIN_TOTAL / 2

/**
 * Image Requirements
 */
const MINIMUM_WIDTH = 400

/**
 * Messenger Actions
 */
const TYPING = 'typing_on';

module.exports = {
  MIKE_WAZOWSKI,
  MR_CHOW_TINY,
  WHY,
  ERROR_INCOMPLETE,
  ERROR_PORTRAIT_IMAGE,
  ERROR_IMAGE_TOO_SMALL,
  ERROR_INVALID_IMAGE,

  PORT,

  CANVAS_WIDTH,
  CANVAS_BACKGROUND,
  MARGIN_TOTAL,
  MARGIN,

  MINIMUM_WIDTH,

  TYPING
}