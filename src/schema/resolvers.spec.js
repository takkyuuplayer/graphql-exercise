import assert from 'power-assert';

import resolvers from './resolvers';
import connectMongo from '../mongoConnector';

describe('schema/resolvers', () => {
  let mongo;
  before(async () => {
    mongo = await connectMongo();
    await mongo.db.collection('links').remove();
  });
  after(async () => {
    await mongo.db.close();
  });

  describe('.Query', () => {
    it('can return all links', async () => {
      const links = await resolvers.Query.allLinks(null, null, { mongo });
      assert.strictEqual(links.length, 0);
    });
  });

  describe('.Mutation', () => {
    it('can create new link', async () => {
      await resolvers.Mutation.createLink(null, {
        url: 'http://www.takkyuuplayer.com',
        describe: 'my website',
      }, { mongo });

      const links = await resolvers.Query.allLinks(null, null, { mongo });

      assert.strictEqual(links.length, 1)
    });
  });
});
