
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337; 
const MONGO_URL = 'mongodb+srv://alhai:<DDgPxpqlMpr5RvMr>@cluster0.jccpjxf.mongodb.net/?retryWrites=true&w=majority';

export const config = {
    mongo : {
        url : MONGO_URL
    },
    server : {
        port : SERVER_PORT
    }
};