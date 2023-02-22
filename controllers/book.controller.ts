import BookModel from "../models/Book";

export const getAllBooks = async (limit: number) => {
    return await BookModel.find({}).limit(limit);
}

export const getBookById = async (id: string) => {
    return await BookModel.findById(id);
}

export const createBook = async ({ title, author, description}: {title: string,  author: string, description: string}) => {
    return await BookModel.create({ title: title, author: author, description: description});
}

export const updateBook = async(id:string, {title, author, description}:{title: string, author: string, description:string}) => {
    const book:any = await BookModel.findById(id);
    if(title) book.title = title;
    if(author) book.author = author;
    if(description) book.description = description;
    return await BookModel.findByIdAndUpdate(id, book, {new: true});
}

export const deleteBook = async (id: string) => {
    return await BookModel.findByIdAndDelete(id);
}