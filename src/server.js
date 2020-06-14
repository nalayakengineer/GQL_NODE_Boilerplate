import { ApolloServer, gql } from 'apollo-server';
import { loadTypeSchema } from './util/schema';
import { merge } from 'lodash';
import books from './App/books/books.resolver';
import coupons from './App/coupon/coupon.resolver';


//Define modules of your app you'll create here
const Apps = ['books', 'coupon']

export const start = async () => {
    const rootSchema = `
            schema {
                query: Query
            }
            type Query {
                coupon: [Coupon]
                books: [Book]
                book(author: String!): Book
            }
    `

    //const AppSchema = await Promise.all(Apps.map(loadSchemaType))
    const AppSchema = await Promise.all(Apps.map(loadTypeSchema))



    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new ApolloServer({
        typeDefs: [rootSchema, ...AppSchema],
        resolvers: merge({}, books, coupons),
    })


    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
        console.log(`🚀  Server running at ${url}`);
    });

}
