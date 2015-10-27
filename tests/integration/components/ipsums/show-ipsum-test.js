import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ipsums/show-ipsum', 'Integration | Component | ipsums/show ipsum', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ipsums/show-ipsum}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ipsums/show-ipsum}}
      template block text
    {{/ipsums/show-ipsum}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
