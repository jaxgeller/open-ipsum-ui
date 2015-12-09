import Ember from 'ember';

export default Ember.Controller.extend({
  deleteText: Ember.computed('confirmDelete', function() {
    if (this.get('confirmDelete')) {
      return 'Confirm Delete';
    }
    else {
      return 'Delete Ipsum';
    }
  }),

  actions: {
    delete() {
      let confirm = this.get('confirmDelete');
      this.toggleProperty('confirmDelete');
      return confirm;
    }
  }
});
