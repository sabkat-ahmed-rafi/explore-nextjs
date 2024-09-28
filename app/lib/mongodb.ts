import { MongoClient } from 'mongodb';

const uri: string | undefined = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@backendtest.ldjqqhi.mongodb.net/?retryWrites=true&w=majority&appName=backendTest`;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if(!process.env.DB_NAME && !process.env.DB_PASS) {
    throw new Error('Please add your mongo uri to the to the .env file')
}

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}


if(process.env.NODE_ENV === 'development') {
    if(!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri)
    clientPromise = client.connect();  
}

export default clientPromise;