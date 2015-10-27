import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    signout() {
      this.api.delete('/signout')
        .then(res => {
          this.get('session').removeToken();
        });
    }
  }
});
