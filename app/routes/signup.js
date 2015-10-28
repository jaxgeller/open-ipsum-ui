import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    signup(u) {
      this.api.post('/users', {user: u})
        .then(res => {
          this.get('session').setToken(res.token);
          this.transitionTo('browse');
        }, (err) => {
          console.log(err);
        });
    }
  }
});
