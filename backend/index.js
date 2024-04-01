const express = require("express");
const app = express();
const cors = require("cors");
const langchainController = require("./controllers/langchain/langchainController");
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/question", require("./routes/langchain"));

// Server entry
app.listen(PORT, async () => {
  await langchainController.generateAndStoreEmbeddings();
  console.log("Embeddings generated and stored");
  console.log("Server running on port 8080");
});
