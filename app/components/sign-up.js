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

      this.sendAction('signup', u);
    }
  }
});
