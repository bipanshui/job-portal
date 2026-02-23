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

const dbName = process.env.MONGODB_DB?.trim();
const db = dbName ? client.db(dbName) : client.db();

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ],
  secret: process.env.BETTER_AUTH_SECRET,
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});