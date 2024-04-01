const express = require("express");
const router = express.Router();
const langchainController = require("../controllers/langchain/langchainController");

router.post("/general", langchainController.handleGeneralQuestion);

module.exports = router;
