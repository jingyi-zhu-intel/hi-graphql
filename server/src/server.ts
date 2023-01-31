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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum tincidunt laoreet. Aenean eget auctor felis, eget pellentesque nibh. Etiam dui dolor, feugiat sed tempus eget, vehicula vel mi."
  },
  {
    id: "yXW0qBRAFuMA",
    version: "0.1",
    name: "ledge-park",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum tincidunt laoreet. Aenean eget auctor felis, eget pellentesque nibh. Etiam dui dolor, feugiat sed tempus eget, vehicula vel mi."
  },
  {
    id: "yXW0qBRsdgtrR",
    version: "0.1",
    name: "smart-robot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum tincidunt laoreet. Aenean eget auctor felis, eget pellentesque nibh. Etiam dui dolor, feugiat sed tempus eget, vehicula vel mi."
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