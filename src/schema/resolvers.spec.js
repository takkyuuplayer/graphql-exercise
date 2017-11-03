import assert from 'power-assert';

import resolvers from './resolvers';

describe('schema/resolvers', () => {
  const Query = resolvers.Query
  describe('.Query', () => {
    it('can return all links', () => {
      assert.strictEqual(Query.allLinks().length, 2);
    });
  });

  const Mutation = resolvers.Mutation;
  describe('.Mutation', () => {

    it('can create new link', () => {
      Mutation.createLink(null, {
        url: 'http://www.takkyuuplayer.com',
        describe: 'my website',
      });

      const allLinks = Query.allLinks()

      assert.strictEqual(allLinks.length, 3)
      assert.deepStrictEqual(allLinks[2], {
        id: 3,
        url: 'http://www.takkyuuplayer.com',
        describe: 'my website',
      });
    });
  });
});
