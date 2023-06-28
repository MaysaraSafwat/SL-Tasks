import { MongoClient } from 'mongodb';

// const {
//  MONGO_URL
// } = process.env;

const MONGO_URL = "mongodb+srv://maysara:maysara123@atlascluster.6kvm7zc.mongodb.net/"

export const client = new MongoClient(MONGO_URL);
export const db = client.db();
db ? console.log("connection established") : console.log("error in db connection")

