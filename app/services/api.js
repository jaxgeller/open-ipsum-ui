import Ember from 'ember';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  ajax: Ember.inject.service(),
  url: 'http://localhost:3000',

  request(path, data) {
    return this.get('ajax')
      .request(`${url}/${path}`, 'GET', {data: data});
  },

  post(path, data) {
    return this.get('ajax')
      .request(`${url}/${path}`, 'POST', {
        headers: this.get('session').getAuthorization(),
        data: data,
      });
  },

  put(path, data) {
    return this.get('ajax')
      .request(`${url}/${path}`, 'PUT', {
        headers: this.get('session').getAuthorization(),
        data: data,
      });
  },

  delete(path) {
    return this.get('ajax')
      .request(`${url}/${path}`, 'DELETE', {
        headers: this.get('session').getAuthorization()
      });
  }
});
