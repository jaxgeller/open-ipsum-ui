import Ember from 'ember';
import validator from 'open-ipsum-ui/utils/validator';


export default Ember.Component.extend({
  classNames: ['input-block'],
  classNameBindings: ['isTyping:fade-in:hide-text', 'isError:error'],

  isTyping: Ember.computed('value', function() {
    return validator.notBlank(this.get('value'));
  }),

  isError: Ember.computed('errors', function() {
    return this.get('errors');
  })
});
