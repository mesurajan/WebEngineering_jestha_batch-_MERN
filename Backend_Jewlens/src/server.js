import { app } from "./app.js";
import { connectDB } from "./config/database.config.js";
import { env } from "./config/env.config.js";

async function startServer() {
  try {
    await connectDB();
    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exitCode = 1;
  }
}

startServer();
