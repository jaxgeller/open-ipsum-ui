import Ember from 'ember';

export default Ember.Mixin.create({
  session: Ember.inject.service(),
  beforeModel(/*transition*/) {
    if (!this.get('session.loggedIn')) {
      // set the tried transition
      this.transitionTo('login');
    }
  }
});
