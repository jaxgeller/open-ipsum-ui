import Ember from 'ember';
import ifLoggedIn from 'open-ipsum-ui/mixins/if-logged-in';

export default Ember.Route.extend(ifLoggedIn, {
  api: Ember.inject.service(),

  model() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties({errors: null});
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
