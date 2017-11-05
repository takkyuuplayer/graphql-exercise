import assert from 'power-assert';

import connectMongo from './mongoConnector';

describe('mongoConnector', () => {
  it('should connect mongo', async () => {
    const mongo = await connectMongo();

    assert(mongo);

    mongo.db.close()
  });
});
