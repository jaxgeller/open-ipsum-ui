import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    signout() {
      let t = this.get('session.token') + ':';

      this.get('ajax')
      .request('http://localhost:3000/signout', 'DELETE', {
        headers: {
          'Authorization': `Basic ${btoa(t)}`
        }, data: {}
      }).then(res => {
        this.get('session').removeToken();
      })
    }
  }
});
