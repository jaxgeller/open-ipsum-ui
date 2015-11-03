import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  model(params) {
    this.get('api').request(`/ipsums/${params.id}`);
  }
});
