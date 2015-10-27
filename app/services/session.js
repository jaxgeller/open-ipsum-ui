import Ember from 'ember';

export default Ember.Service.extend({
  token: localStorage.getItem('token'),

  getAuthorization: function() {
    let token = `${this.get('token')}:`;
    return {'Authorization': `Basic ${btoa(token)}`}
  },

  setToken: function(token) {
    this.set('token', token);
    localStorage.setItem('token', token);
  },

  removeToken: function() {
    this.set('token', null);
    localStorage.clear();
  }
});
