import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Application {
    id: ID!
    name: String!
    version: String!
    description: String
  }
  type Query {
    applications: [Application]
  }
  type Mutation {
    addApplication(name: String, version: String, description: String): Application
  }
`

export const applications = [
  {
    id: "soP9XZOCSaLdQX",
    version: "1.0",
    name: "smart-edge",
    description: "smart edge"
  },
  {
    id: "yXW0qBRAFuMA",
    version: "0.1",
    name: "ledge-park",
    description: "ledge park"
  }
]


const resolvers = {
  Query: {
    applications: () => applications,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);