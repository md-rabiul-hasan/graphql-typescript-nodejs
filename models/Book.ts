import { Schema, model, Model, Document } from 'mongoose';


interface BookInterface extends Document {
    _id: string;
    title: string;
    description: string;
    author: string;
}

const bookSchema: Schema = new Schema<BookInterface>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
});

const BookModel = model<BookInterface>('Books', bookSchema);
export default BookModel;