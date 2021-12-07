import {GraphQLSchema} from 'graphql'
import { makeExecutableSchema } from 'graphql-middleware/node_modules/graphql-tools';
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import path from 'path';

const allTypes: GraphQLSchema[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql")
  );
  
  const allResolvers: any[] = fileLoader(
    path.join(__dirname, "./api/**/*.resolvers.*")
  );
  
  const mergedTypes = mergeTypes(allTypes);
  const mergedResolvers = mergeResolvers(allResolvers);
  
  const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
  });
  
  export default schema;