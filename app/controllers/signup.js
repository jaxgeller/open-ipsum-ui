import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.user.email',
    'model.user.username',
    'model.user.password',
    'model.user.password_confirmation', function() {
      return this.get('model.user.email').length &&
          this.get('model.user.username').length &&
          this.get('model.user.password').length &&
          this.get('model.user.password_confirmation').length;
  }),

  actions: {
    signup() {

      return this.get('isValid') > 0;
    }
  }
});
