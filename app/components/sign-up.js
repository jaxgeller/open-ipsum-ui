import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    signup() {
      let u = {
        username: this.get('username'),
        email: this.get('email'),
        password: this.get('password'),
        password_confirmation: this.get('password_confirmation')
      }

      this.api.post('/users', {user: u})
        .then(res => {
          this.get('session').setToken(res.token);
        });
    }
  }
});
