import { getAllBooks, getBookById } from "../controllers/book.controller"

const query = {
    books: async({limit}: {limit: number}, context: any) => {
        return await getAllBooks(limit)
    },

    book: async({id}: {id: string}, context: any) => {
        return await getBookById(id)
    }

}

export default query