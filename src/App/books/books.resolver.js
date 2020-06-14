import { Books, Coupons } from '../../db/tempdata'


//Create resplover for each query type
const books = () => {
    return Books
}

const book = (_, author) => {
    var value = Books.find(book => book.author === args.author);
    return value;
}


//Export the resolvers in the the server
export default {
    Query: {
        book,
        books
    },
    Mutation: {}
}