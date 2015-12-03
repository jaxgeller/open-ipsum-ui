import Ember from 'ember';
import random from 'open-ipsum-ui/utils/random-int';

export function htmlify(params) {
  let text = params[0].match(/[^\.!\?]+[\.!\?]+/g);
  let numParagraphs = params[1];
  let paragraphHTML = params[2];
  let holder = [];

  function createParagraph() {
    let h = [];
    let pLength = random(3, 6);

    for (let i =0; i < pLength; i++) {
      h.push(text[random(0, text.length)]);
    }

    return h;
  }

  for (let i =0; i < numParagraphs; i++) {
    holder.push(createParagraph());
  }

  // go in and add tags
  let before = '<p class="content-text">';
  let after = '</p>';

  if (paragraphHTML) {
    before += '&lt;p&gt;';
    after = ' &lt;/p&gt;' + after;
  }

  for (let i =0; i < holder.length; i++) {
    holder[i].unshift(before);
    holder[i].push(after);
    holder[i] = holder[i].join('');
  }

  return holder.join('');
}

export default Ember.Helper.helper(htmlify);
