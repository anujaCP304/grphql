const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

// Defining a simple GraphQL schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: {
      message: {
        type: GraphQLString,
        resolve: () => 'Hello, Catchpoint!'
      }
    }
  })
});

// Creating an Express server with GraphQL middleware
const app = express();
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
