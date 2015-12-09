import Ember from 'ember';
import validator from 'open-ipsum-ui/utils/validator';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.user.email',
    'email',
    'model.user.password',
    'model.user.password_confirmation',
    'model.user.current_password',

    function() {

      let checkEmail = this.get('model.user.email') !== this.get('email');
      let checkPassword = validator.notBlank(
        this.get('model.user.password'),
        this.get('model.user.password_confirmation'),
        this.get('model.user.current_password')
      );

      return checkPassword + checkEmail;
  }),

  deleteText: Ember.computed('confirmDelete', function() {
    if (this.get('confirmDelete')) {
      return 'Confirm Delete';
    }
    else {
      return 'Delete Account';
    }
  }),


  actions: {
    save() {
      return this.get('isValid') > 0;
    },

    delete() {
      let confirm = this.get('confirmDelete');
      this.toggleProperty('confirmDelete');
      return confirm;
    }
  }
});
