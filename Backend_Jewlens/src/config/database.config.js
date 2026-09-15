import mongoose from "mongoose";
import dns from "node:dns";
import { env } from "./env.config.js";

export async function connectDB() {
  if (env.DNS_SERVERS) {
    dns.setServers(env.DNS_SERVERS.split(",").map((server) => server.trim()));
  }
  await mongoose.connect(env.MONGO_URI);
  console.log("Connected to MongoDB");
}
