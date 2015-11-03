import Ember from 'ember';

export default Ember.Service.extend({
  username: '',
  token: '',
  loggedIn: localStorage.getItem('token') || false,

  save(data) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('username', data.username);
    this.set('username', data.username);
    this.set('token', data.token);
    this.set('loggedIn', true);
  },

  delete() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.set('username', null);
    this.set('token', null);
    this.set('loggedIn', false);
  },

  authorize() {
    let token = `${this.get('token')}:`;
    return {'Authorization': `Basic ${btoa(token)}`};
  }
});
