import Ember from 'ember';
import validator from 'open-ipsum-ui/utils/validator';

export default Ember.Controller.extend({
  isValid: Ember.computed('model.ipsum.title', 'model.ipsum.text', function() {
    return validator.notBlank(this.get('model.ipsum.title'), this.get('model.ipsum.text'));
  }),

  placeholder: Ember.computed('model.ipsum.g_markov', function() {
    if (this.get('model.ipsum.g_markov')) {
      return "Just type normal sentences...";
    }
    else {
      return "Add comma separated values here...";
    }
  }),

  actions: {
    commaify() {
      let text = this.get('model.ipsum.text');
      this.set('model.ipsum.text', text.replace(/[ ,]+/g, ", "));
    },

    create() {
      return this.get('isValid');
    },

    toggleMarkov() {
      this.toggleProperty('model.ipsum.g_markov');
    }
  }
});
