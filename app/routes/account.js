import Ember from 'ember';
import AuthenticatedRoute from 'open-ipsum-ui/mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRoute, {
  session: Ember.inject.service(),
  model() {
    return this.api.request(`/users/${this.get('session.username')}`);
  },

  actions: {
    deleteIpsum(id) {
      this.api.delete(`/ipsums/${id}`)
        .then(res => {
          this.refresh();
        }, err => {
          console.log(err);
        });
    },

    deleteAccount() {
      this.api.delete(`/users/${this.get('session.username')}`)
        .then(res => {
          this.get('session').removeUsername();
          this.get('session').removeToken();
          this.transitionTo('browse');
        }, err => {
          console.log(err);
        });
    }
  }
});
