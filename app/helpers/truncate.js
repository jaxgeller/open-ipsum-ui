import Ember from 'ember';

export function truncate(params, hash) {
  let text = params[0];
  let size = hash.size || 30;

  return text.split(' ').slice(0, size).join(' ');
}

export default Ember.Helper.helper(truncate);
