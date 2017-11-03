import assert from 'power-assert';

import resolvers from './resolvers';

describe('schema/resolvers', () => {
  describe('.Query', () => {
    const Query = resolvers.Query
    it('can return all links', () => {
      assert.strictEqual(Query.allLinks().length, 2);
    });
  });
});
