import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    logout() {
      this.get('api').authenticated('/signout', 'DELETE').then(() => {
        this.get('session').delete();
        this.transitionTo('browse');
      }, () => {
        this.get('session').delete();
        this.transitionTo('browse');
      });
    }
  }
});
