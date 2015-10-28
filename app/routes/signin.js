import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    signin(u) {
      this.api.post('/signin', {user: u})
        .then(res => {
          this.get('session').setToken(res.token);
          this.get('session').setUsername(res.username);
          this.transitionTo('browse');
        }, (err) => {
          console.log(err);
        });
    }
  }
});
