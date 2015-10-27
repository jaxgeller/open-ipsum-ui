import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    signin() {
      let u = {
        email: this.get('email'),
        password: this.get('password')
      }

      this.api.post('/signin', {user: u})
        .then(res => {
          this.get('session').setToken(res.token);
        });
    }
  }
});
