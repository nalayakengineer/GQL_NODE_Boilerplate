import { ApolloServer, gql } from 'apollo-server';
import { loadSchemaType } from './util/schema';
import { merge } from 'lodash';
import { book, books } from './App/books/books.resolver';
import { coupon } from './App/coupon/coupon.resolver';


//Define modules of your app you'll create here
const Apps = ['books', 'coupon']

export const start = async () => {
    const rootSchema = `
        schema {
        query: Query
        mutation: Mutation
        }
    `

    console.log(Apps);

    const AppSchema = await Promise.all(Apps.map(loadSchemaType))


    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new ApolloServer({
        typeDefs: [rootSchema, ...AppSchema],
        resolvers: merge({}, book, books, coupon),
    })


    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
        console.log(`🚀  Server running at ${url}`);
    });

}
