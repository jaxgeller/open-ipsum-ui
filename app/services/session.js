import Ember from 'ember';

export default Ember.Service.extend({
  token: localStorage.getItem('token') || null,
  email: localStorage.getItem('email') || null,
  username: localStorage.getItem('username') || null,
  loggedIn: localStorage.getItem('token') || false,

  save(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username);
    localStorage.setItem('email', data.email);
    this.set('email', data.email);
    this.set('username', data.username);
    this.set('token', data.token);
    this.set('loggedIn', true);
  },

  delete() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    this.set('email', null);
    this.set('username', null);
    this.set('token', null);
    this.set('loggedIn', false);
  },

  authorize() {
    let token = `${this.get('token')}:`;
    return {'Authorization': `Basic ${btoa(token)}`};
  }
});
