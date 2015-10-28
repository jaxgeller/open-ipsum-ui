import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    signout() {
      this.sendAction('signout');
    }
  }
});
