import Ember from 'ember';

export function htmlify(params) {
  let text = params[0].match( /[^\.!\?]+[\.!\?]+/g );
  let dest = "";

  let needsClosing = false;
  for (let i = 0; i < text.length; i++) {
    if (i % 10 === 0) {
      dest += '<p class="ipsum-text">';
    }

    dest += text[i];

    if (i % 10 === 9 || i + 1 === text.length) {
      dest += '</p>';
    }
  }

  return dest;
}

export default Ember.Helper.helper(htmlify);
