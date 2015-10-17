import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    signup() {
      let u = {
        username: this.get('username'),
        email: this.get('email'),
        password: this.get('password'),
        password_confirmation: this.get('password_confirmation')
      }

      this.get('ajax')
        .request('http://localhost:3000/users', 'POST', {data: {user: u}}).then(res => {
          this.get('session').setToken(res.token);
        });

    }
  }
});
