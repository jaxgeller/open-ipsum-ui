import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    logout() {
      this.get('api').authenticated('/signout', 'DELETE').then(res => {
        this.get('session').delete()
      })
    }
  }
});
