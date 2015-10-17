import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(params) {
    console.log(params)
    return this.get('ajax').request('http://localhost:3000/ipsums/' + params.id);
  }
});
