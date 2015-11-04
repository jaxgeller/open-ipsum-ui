import Ember from 'ember';
import random from 'open-ipsum-ui/utils/random-int';

export function htmlify(params) {
  const splitters = /\.|\?|\!/;
  let text = params[0].split(splitters);
  let holder = [];

  for (let i =0; i < text.length; i++) {
    let r = random(3, 6) + i;
    holder.push(text.slice(i, r));
    i = r;
  }

  for (let i =0; i < holder.length; i++) {
    holder[i].unshift('<p>');
    holder[i].push('</p>');
    holder[i] = holder[i].join('');
  }

  return holder.join('');
}

export default Ember.Helper.helper(htmlify);
