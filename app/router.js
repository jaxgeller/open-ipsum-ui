import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('browse', {path: '/'});

  this.route('signup');
  this.route('login');

  this.route('account');

  this.route('ipsums', function() {
    this.route('show', {path: '/:id'});
    this.route('edit', {path: '/:id/edit'});
    this.route('create', {path: '/create'});
  });
});

export default Router;
