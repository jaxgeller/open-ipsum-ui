import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.api.request(`/users/${params.id}`);
  }
});
