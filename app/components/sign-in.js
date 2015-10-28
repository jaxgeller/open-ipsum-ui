import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    signin() {

      this.sendAction('signin', {
        email: this.get('email'),
        password: this.get('password')
      });
    }
  }
});
