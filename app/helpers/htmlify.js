import Ember from 'ember';

export function htmlify(params) {
  let textBuffer = Ember.copy(params[0]);
  let numParagraphs = params[1];
  let paragraphHTML = params[2];

  // go in and add tags
  let before = '<p class="content-text">';
  let after = '</p>';

  if (paragraphHTML) {
    before = '<p class="content-text monospace">&lt;p&gt;';
    after = '&lt;/p&gt;' + after;
  }

  for (let i =0; i < textBuffer.length; i++) {
    textBuffer[i] = textBuffer[i].join('');
    textBuffer[i] = before + textBuffer[i].trim();
    textBuffer[i] = textBuffer[i] + after;
  }

  return textBuffer.slice(0, numParagraphs).join('');
}

export default Ember.Helper.helper(htmlify);
