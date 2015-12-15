import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.transitionTo('ipsums.show', '404-ipsum')
  }
});
