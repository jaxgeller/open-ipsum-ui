import Ember from 'ember';
import ifLoggedIn from 'open-ipsum-ui/mixins/if-logged-in';

export default Ember.Route.extend(ifLoggedIn, {
  api: Ember.inject.service(),

  model() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({errors: null});
  },

  actions: {
    signup() {
      this.get('api').request('/users', 'POST', this.currentModel).then(res=> {
        this.get('session').save(res);
        this.transitionTo('browse');
      }, err=> {
        if (err) {
          this.controller.set('errors', err.errors);
        }
      });
    }
  }
});
