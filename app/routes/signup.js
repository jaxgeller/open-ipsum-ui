import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  api: Ember.inject.service(),

  beforeModel() {
    if (this.get('session.loggedIn')) {
      this.transitionTo('browse');
    }
  },

  model() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },

  actions: {
    signup() {
      this.get('api').request('/users', 'POST', this.currentModel).then(res=> {
        this.get('session').save(res);
        this.transitionTo('browse');
      });
    }
  }
});
