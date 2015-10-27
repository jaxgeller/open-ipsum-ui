import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      ipsum: {
        title: '',
        text: '',
        user: null
      }
    }
  }
});
