import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('signin', {});
  this.route('signout', {});
  this.route('signup', {});
  this.route('ipsums', {}, function() {
    this.route('show', {path: '/:id'});
  });
});

export default Router;
