import Ember from 'ember';
import AuthenticatedRoute from 'openipsum-front-v2/mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRoute,{
  session: Ember.inject.service(),
  actions: {
    signout() {
      this.api.delete('/signout')
        .then(res => {
          this.get('session').removeToken();
          this.transitionTo('browse')
        });
    }
  }
});
