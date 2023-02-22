import { ConnectOptions } from 'mongodb';
import mongoose from 'mongoose';
const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://mdrabiulhasan:zWuaHSpsq4MjFHkc@nodejslearning.yr5egud.mongodb.net/graphql_typescript?retryWrites=true&w=majority');
    console.log('MongoDb Connected');   
}
export default connectDB;