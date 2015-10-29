import Ember from 'ember';

export default Ember.Mixin.create({
  session: Ember.inject.service(),
  beforeModel(/*transition*/) {
    if (!this.get('session.token')) {
      // set the tried transition
      this.transitionTo('signin');
    }
  }
});
