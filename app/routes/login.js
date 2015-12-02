import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  session: Ember.inject.service(),

  model() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  actions: {
    login() {
      this.get('api').request('/signin', 'POST', this.currentModel)
        .then(res => {
          this.controller.set('errors', null);
          this.get('session').save(res);
          this.transitionTo('browse');
        }, err => {
          if (err) this.controller.set('errors', 'This account doesnt exist')
        });
    }
  }
});
