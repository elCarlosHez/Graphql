import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
 type
`

const server = new GraphQLServer({});

server.start(() => console.log('serveris on localhost'));