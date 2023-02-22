import { createBook, updateBook, deleteBook } from "../controllers/book.controller";

const mutation = {
    addBook: async({ title, author, description}: { title: string, author: string, description: string}, context:any) => {
        try{
            const book = await createBook({ title, author, description});
            return {
                data: book,
                success: true,
                error: ''
            };
        }catch(err: any){
            return {
                data: null,
                success: false,
                error: err.message
            }
        }
    },

    updateBook: async({id, title, author, description}: {id: string, title: string, author: string, description: string}, context: any) => {
        try{
            const book = await updateBook(id, {title, author, description});
            if (!book) {
                return {
                    data: null,
                    success: false,
                    error: 'Book not found'
                };
            }
            return {
                data: book,
                success: true,
                error: ''
            };
        }catch(err: any){
            return {
                data: null,
                success: false,
                error: err.message
            };
        }
    },

    deleteBook: async({id}:{id: string}, context: any) => {
        try {
            const book = await deleteBook(id)
            if (!book) {
                return {
                    success: false,
                    message: 'Book not found'
                };
            }
            return {
                success: true,
                message: 'book deleted successfully'
            };
        }
        catch (error: any) {
            return {
                success: false,
                message: error.message
            };
        }
    }
}

export default mutation;