import Ember from 'ember';
import config from 'open-ipsum-ui/config/environment';

export default Ember.Service.extend({
  session: Ember.inject.service(),
  ajax: Ember.inject.service(),

  request(path, type, data) {
    return this.get('ajax').request(`${config.APP.HOST}${path}`, {
      type: type || 'GET',
      data: data || {}
    });
  },

  authenticated(path, type, data) {
    return this.get('ajax').request(`${config.APP.HOST}${path}`, {
      type: type,
      headers: this.get('session').getAuthorization(),
      data: data
    });
  }

});
