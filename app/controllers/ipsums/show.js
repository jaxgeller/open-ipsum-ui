import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  currentUser: Ember.computed('session.username', 'model.ipsum.user.username', function() {
    return this.get('model.ipsum.user.username') === this.get('session.username');
  }),

  actions: {
    editParagraphs(params) {
      if (this.get('paragraphs') < 2 && params === -1) params = 0;
      if (this.get('paragraphs') > 9 && params === 1) params = 0;
      this.incrementProperty('paragraphs', params);
    },

    addHTML() {
      this.toggleProperty('paragraphHTML');
    },

    apiify() {
      window.alert('curl https://openipsum.com/ipsums/' + this.get('model.ipsum.id'))
    }
  }
});
