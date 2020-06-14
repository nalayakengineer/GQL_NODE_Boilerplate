import tempdata from '../../db/tempdata'


//Create resplover for each query type
const books = () => {
    return tempdata.Books
}

const book = (_, args) => {
    var value = tempdata.Books.find(book => book.author === args.author);
    return value;
}


//Export the resolvers in the the server
export default {
    Query: {
        book,
        books
    }
}