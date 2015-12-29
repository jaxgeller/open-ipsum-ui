import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),

  model(params) {
    return this.get('api').request(`/users/${params.id}`);
  },

});
