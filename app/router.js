import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('signin', {});
  this.route('signout', {});
  this.route('signup', {});
  this.route('account', {});

  this.route('ipsums', {}, function() {
    this.route('show', {path: '/:id'});
    this.route('create', {path: '/create'});
  });

  this.route('browse', {path:'/'});

  this.route('users', {}, function() {
    this.route('show', {path: '/:id'});
  });
});

export default Router;
