import Ember from 'ember';

export default Ember.Service.extend({
  loggedIn: localStorage.getItem('token') || false,

  save(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username);
    this.set('loggedIn', true);
  },

  delete(data) {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.set('loggedIn', false);
  }
});
