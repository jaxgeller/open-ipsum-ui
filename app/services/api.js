import Ember from 'ember';
import config from 'open-ipsum-ui/config/environment';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  ajax: Ember.inject.service(),
  url: config.APP.HOST,

  request(path, data) {
    return this.get('ajax')
      .request(`${this.get('url')}${path}`, 'GET', {data: data});
  },

  post(path, data) {
    return this.get('ajax')
      .request(`${this.get('url')}${path}`, 'POST', {
        headers: this.get('session').getAuthorization(),
        data: data,
      });
  },

  put(path, data) {
    return this.get('ajax')
      .request(`${this.get('url')}${path}`, 'PUT', {
        headers: this.get('session').getAuthorization(),
        data: data,
      });
  },

  delete(path) {
    return this.get('ajax')
      .request(`${this.get('url')}${path}`, 'DELETE', {
        headers: this.get('session').getAuthorization()
      });
  }
});
