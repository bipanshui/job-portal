import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGO_URI ?? process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error("Please define the MONGODB_URI (or MONGO_URI) environment variable");
}

const globalForMongo = globalThis as unknown as { betterAuthMongoClient?: MongoClient };
const client = globalForMongo.betterAuthMongoClient ?? new MongoClient(mongoUri);
if (process.env.NODE_ENV !== "production") globalForMongo.betterAuthMongoClient = client;
const db = client.db();

export const auth = betterAuth({
  //...

  database: mongodbAdapter(db, {
        client,
  }),
  emailAndPassword : {
     enabled : true
  }
});