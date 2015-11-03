import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('browse', {path: '/'});

  this.route('signup');
  this.route('login');
  this.route('logout');

  this.route('account');
});

export default Router;
