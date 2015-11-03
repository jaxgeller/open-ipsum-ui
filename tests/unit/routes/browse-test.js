import { moduleFor, test } from 'ember-qunit';

moduleFor('route:browse', 'Unit | Route | browse', {
  needs: ['service:api']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
