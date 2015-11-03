import Ember from 'ember';
import needsAuthorization from 'open-ipsum-ui/mixins/needs-authorization';

export default Ember.Route.extend(needsAuthorization, {
  api: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
    logout() {
      this.get('api').authenticated('/signout', 'DELETE').then(() => {
        this.get('session').delete();
        this.transitionTo('browse');
      });
    }
  }
});
