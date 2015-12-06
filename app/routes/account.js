import Ember from 'ember';
import needsAuthorization from 'open-ipsum-ui/mixins/needs-authorization';

export default Ember.Route.extend(needsAuthorization, {
  session: Ember.inject.service(),
  api: Ember.inject.service(),

  model() {
    return this.get('api').authenticated(`/users/${this.get('session.username')}`);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      errors: null,
      email: model.user.email
    });
  },

  actions: {
    save() {
      let u = this.currentModel;
      delete u.user.ipsums;
      delete u.user.username;
      if (!u.user.current_password) delete u.user.current_password;

      this.get('api').authenticated(`/users/${this.get('session.username')}`, 'PUT', u)
        .then(res => {
          this.controller.set('email', this.currentModel.user.email);
          this.controller.set('model.user.current_password', '')
          this.controller.set('model.user.password', '')
          this.controller.set('model.user.password_confirmation', '')
          this.controller.set('errors', null);
        }, err => {

          this.controller.set('errors', err.errors);
        });
    },

    delete() {
      let conf = confirm('Do you really want to delete your account?');
      if (conf) {
        this.get('api').authenticated(`/users/${this.get('session.username')}`, 'DELETE').then(res=> {
          this.get('session').delete();
          this.transitionTo('browse');
        });
      }
    }
  }
});
