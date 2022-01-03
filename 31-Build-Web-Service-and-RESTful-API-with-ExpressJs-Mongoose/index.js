const express = require("express");
const router = require("./routers")


const dotenv = require("dotenv");
dotenv.config();

const db = require("./config/config.db");

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;


async function main() {
  try {
    await db.openDBConnection(URI);
    const app = express();
    app.use(express.json())
    app.use(router)
    app.listen(PORT, (req, res) => {
      console.log("Server is Listening on Port", PORT);
    });
  } catch (error) {
    console.log("main:", error.message);
  }
}

main()