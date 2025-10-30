import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://krishnusingh2002_db_user:mFM9hzOwumYb0Qmh@cluster0.1ddqpjx.mongodb.net/';
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;

