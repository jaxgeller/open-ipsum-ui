import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    logout() {

      this.get('api').request('/signout', 'DELETE')
        .then(res => {
          this.get('session').save(res);
          this.transitionTo('browse');
        });
    }
  }
});
