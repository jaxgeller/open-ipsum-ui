import Ember from 'ember';

export default Ember.Component.extend({
  copyStatus: 'Copy to clipboard',

  init() {
    this._super();
    new Clipboard('.topbar-button');
  },

  actions: {
    click() {
      this.set('copyStatus', 'Copied!');
    }
  }
});
