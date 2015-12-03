import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed('model.ipsum.title', 'model.ipsum.text', function() {
    return this.get('model.ipsum.title').length && this.get('model.ipsum.text').length;
  }),

  actions: {
    create() {
      return this.get('isValid') > 0;
    }
  }

});
