import Ember from 'ember';
import random from 'open-ipsum-ui/utils/random-int';

export function htmlify(params) {
  let text = params[0].match(/[^\.!\?]+[\.!\?]+/g);
  let numParagraphs = params[1];
  let paragraphHTML = params[2];

  let paragraphLength = Math.floor(text.length/ numParagraphs);
  let holder = [];

  while (text.length) {
    holder.push(text.splice(0, paragraphLength));
  }

  // trim the length if it didnt get it right
  if (holder.length > numParagraphs) {
    holder = holder.slice(0, numParagraphs);
  }

  // add to length if it didnt get it right
  if (holder.length < numParagraphs) {
    while (holder.length !== numParagraphs) {
      holder.push(holder[random(0, holder.length)]);
    }
  }

  // go in and add tags
  let before = '<p class="content-text">';
  let after = '</p>';

  if (paragraphHTML) {
    before += '&lt;p&gt;';
    after = '&lt;/p&gt;' + after;
  }

  for (let i =0; i < holder.length; i++) {
    holder[i].unshift(before);
    holder[i].push(after);
    holder[i] = holder[i].join('');
  }

  return holder.join('');
}

export default Ember.Helper.helper(htmlify);
