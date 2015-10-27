import Ember from 'ember';

export function sampleText(params) {
  return params[0].split(' ').slice(0, 30).join(' ');
}

export default Ember.Helper.helper(sampleText);
