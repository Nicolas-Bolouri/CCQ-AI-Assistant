const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const { HNSWLib } = require("langchain/vectorstores/hnswlib");
const fs = require("fs");
const { OpenAI } = require("langchain/llms/openai");
const { RetrievalQAChain, loadQARefineChain } = require("langchain/chains");

const OPENAI_API_KEY = "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";
const model = new OpenAI({ openAIApiKey: OPENAI_API_KEY, temperature: 0.9 });

async function generateAndStoreEmbeddings() {
  // Generate embeddings for English
  const trainingTextEn = fs.readFileSync("en-data.txt", "utf8");
  await generateEmbeddingsForLanguage(trainingTextEn, "hnswlib-en");

  // Generate embeddings for French
  const trainingTextFr = fs.readFileSync("fr-data.txt", "utf8");
  await generateEmbeddingsForLanguage(trainingTextFr, "hnswlib-fr");
}

async function generateEmbeddingsForLanguage(text, storeName) {
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);

  const vectorStore = await HNSWLib.fromDocuments(
    docs,
    new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY })
  );

  vectorStore.save(storeName);
}

async function getGeneralAnswer(question, language) {
  const storeName = language === "fr" ? "hnswlib-fr" : "hnswlib-en";

  const vectorStore = await HNSWLib.load(
    storeName,
    new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY })
  );

  const chain = new RetrievalQAChain({
    combineDocumentsChain: loadQARefineChain(model),
    retriever: vectorStore.asRetriever(),
  });

  const result = await chain.call({ query: question });
  return result.output_text;
}

const handleGeneralQuestion = async (req, res) => {
  const question = req.body.question;
  const language = req.body.language;
  const answer = await getGeneralAnswer(question, language);
  res.json(answer);
};

module.exports = { handleGeneralQuestion, generateAndStoreEmbeddings };
