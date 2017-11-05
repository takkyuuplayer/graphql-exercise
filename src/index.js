import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './schema'

import connectMongo from './mongoConnector';

const start = async () => {
  const mongo = await connectMongo();

  const app = express();
  app.use('/graphql', bodyParser.json(), graphqlExpress({
    context: { mongo },
    schema,
  }));
  app.use('/graphiql', bodyParser.json(), graphiqlExpress({endpointURL: '/graphql'}));

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Hackernews GraphQL server running on port ${PORT}.`)
  });
}

start()
