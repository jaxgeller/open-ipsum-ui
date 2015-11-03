import Ember from 'ember';
import NeedsAuthorizationMixin from '../../../mixins/needs-authorization';
import { module, test } from 'qunit';

module('Unit | Mixin | needs authorization');

// Replace this with your real tests.
test('it works', function(assert) {
  var NeedsAuthorizationObject = Ember.Object.extend(NeedsAuthorizationMixin);
  var subject = NeedsAuthorizationObject.create();
  assert.ok(subject);
});
