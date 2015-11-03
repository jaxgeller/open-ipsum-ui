import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),

  model() {
    return this.get('api').request('/ipsums');
  }
});
