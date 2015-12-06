import Ember from 'ember';
import validator from 'open-ipsum-ui/utils/validator';

export default Ember.Controller.extend({
  isValid: Ember.computed('model.user.email', 'model.user.password', function() {
    return validator.notBlank( this.get('model.user.email'), this.get('model.user.password'));
  }),

  actions: {
    login() {
      return this.get('isValid');
    }
  }
});
