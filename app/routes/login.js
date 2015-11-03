import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    login() {
      let props = {email: this.get('controller.email'), password: this.get('controller.password')};

      this.get('api').request('/signin', 'POST', {user: props})
        .then(res => {
          this.get('session').save(res);
          this.transitionTo('browse');
        });
    }
  }
});
