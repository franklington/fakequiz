import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | create/question', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:create/question');
    assert.ok(route);
  });
});
