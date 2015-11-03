import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  api: Ember.inject.service(),

  beforeModel() {
    if (this.get('session.loggedIn')) {
      this.transitionTo('browse');
    }
  },

  actions: {
    signup() {
      let data = {user: this.get('controller').getProperties('username', 'email', 'password', 'passwordConfirmation')};
      this.get('api').request('/users', 'POST', data).then(res=> {
        this.get('session').save(res);
        this.transitionTo('browse');
      });
    }
  }
});
