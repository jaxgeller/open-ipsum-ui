import Ember from 'ember';
import validator from 'open-ipsum-ui/utils/validator';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.user.email',
    'model.user.username',
    'model.user.password',
    'model.user.password_confirmation', function() {
      return validator
        .notBlank(
          this.get('model.user.email'),
          this.get('model.user.username'),
          this.get('model.user.password'),
          this.get('model.user.password_confirmation')
        );
  }),

  actions: {
    signup() {
      return this.get('isValid');
    }
  }
});
