import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model() {
    return this.api.request('/users/jackson');
  },

  actions: {
    delete() {

    }
  }
});
