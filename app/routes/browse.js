import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),

  model() {
    return this.get('api').request('/ipsums');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      query: null,
      searchResults: null,
      noResults: false,
    });
  }
});
