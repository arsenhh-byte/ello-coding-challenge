import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import express from 'express'; 
import path from 'path';

// Initialize the Express app
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

// Serve static files from the 'frontend/assets' directory
app.use('/assets', express.static(path.join(__dirname, 'frontend/assets')));

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
