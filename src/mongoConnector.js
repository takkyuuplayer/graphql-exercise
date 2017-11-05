import { MongoClient } from 'mongodb';

const MONGO_URL = 'mongodb://mongo:27017/hackernews';

const connectMongo = async () => {
  const db = await MongoClient.connect(MONGO_URL);
  return {
    db,
    Links: db.collection('links'),
  };
}

export default connectMongo;
