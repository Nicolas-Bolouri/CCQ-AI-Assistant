# CCQ AI Assistant 

Built in collaboration with Benjamin Morrison (civil engineering student), the CCQ AI Assisant is a simple tool for civil engineers in Quebec looking to validate their project descriptions against Quebec's Construction Code (the CCQ) or simply ask questions about the document. Built using Langchain embeddings for context integration and Open AI's API, the web app offers assistance for both the french and english versions of the document.

## Table of Contents 

- [Built With](#built-with)
- [Getting Started](#getting-started)


## Built With

- ReactJs (Bootstraped using create-react-app)
- NodeJs
- ExpressJs
- OpenAI API
- Langchain


## Getting Started 

1. **Clone the Repository**


2. **Install Dependencies**
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. **Configure**
    - Create a `.env` file in both the backend and frontend directories
        - For the backend directory, add your OpenAI API key as `OPENAI_API_KEY`
        - For the frontend directory, add your backend url as `REACT_APP_API_KEY` (localhost:8080 if running locally)

4. **Run the App**
    ```bash
    cd backend
    npm run start 
    cd ../frontend
    npm run start
    ```

