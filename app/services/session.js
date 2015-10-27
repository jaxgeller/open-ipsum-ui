import Ember from 'ember';

export default Ember.Service.extend({
  token: localStorage.getItem('token'),


  getAuthorization() {
    let token = `${this.get('token')}:`;
    return {'Authorization': `Basic ${btoa(token)}`}
  },

  setToken(token) {
    this.set('token', token);
    localStorage.setItem('token', token);
  },

  removeToken() {
    this.set('token', null);
    localStorage.clear();
  }
});
