import Ember from 'ember';

export function htmlify(params) {
  const splitters = /\.|\?|\!/;
  let text = params[0].split(splitters);
  let dest = "";

  let needOpening = false;

  for (let i = 0; i < text.length; i++) {
    if (i === 0)
      dest += '<p class="ipsum-text">';

    if (needOpening) {
      dest += '<p class="ipsum-text">';
      needOpening = false;
    }

    dest += text[i];

    if (i % 3 === 0 && i !== 0) {
      dest += '</p>';
      needOpening = true
    }
  }

  return dest;
}

export default Ember.Helper.helper(htmlify);
