import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    signin() {
      let u = {
        email: this.get('email'),
        password: this.get('password')
      }

      this.get('ajax')
        .request('http://localhost:3000/signin', 'POST', {data: {user: u}}).then(res => {
          this.get('session').setToken(res.token);
        });
    }
  }
});
