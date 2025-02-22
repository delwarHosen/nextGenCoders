import { MongoClient, ServerApiVersion } from 'mongodb';

// const uri = process.env.MONGODB_URI;

const uri ="mongodb+srv://nextGenCoders:jNHjWSqQ2cMBZg9a@cluster1.ot4itnh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

export const collectionNameObj = {
    coursesCollection : "courses",
    userCollection : "users"
}

export default function dbConnect(collectionName) {
    
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return client.db(process.env.DB_NAME).collection(collectionName)
    // return client.db("nextGenCoders").collection(collectionName)
}

