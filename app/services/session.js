import Ember from 'ember';

export default Ember.Service.extend({
  username: localStorage.getItem('username'),
  setUsername(username) {
    this.set('username', username);
    localStorage.setItem('username', username);
  },
  removeUsername() {
    this.set('username', null);
    localStorage.removeItem('username');
  },

  token: localStorage.getItem('token'),

  setToken(token) {
    this.set('token', token);
    localStorage.setItem('token', token);
  },

  removeToken() {
    this.set('token', null);
    localStorage.removeItem('token');
  },

  getAuthorization() {
    let token = `${this.get('token')}:`;
    return {'Authorization': `Basic ${btoa(token)}`};
  }
});
