import Ember from 'ember';
import validator from 'open-ipsum-ui/utils/validator';

export default Ember.Controller.extend({
  isValid: Ember.computed('model.ipsum.title', 'model.ipsum.text', function() {
    return validator.notBlank(this.get('model.ipsum.title'), this.get('model.ipsum.text'));
  }),

  actions: {
    create() {
      return this.get('isValid');
    },

    toggleMarkov() {
      this.toggleProperty('model.ipsum.g_markov');
    }
  }
});
