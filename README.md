# CCQ AI Assistant

Developed in collaboration with Benjamin Morrison, a civil engineering student, the CCQ AI Assistant is an simple tool designed for civil engineers in Quebec. It enables users to validate their project descriptions against the Quebec Construction Code (the CCQ) or to ask questions about the document. The tool integrates Langchain's LLaMA embeddings for context comprehension and uses the OpenAI API for processing queries, supporting both the French and English versions of the CCQ. This web application aims to streamline the process of adhering to construction standards, ensuring compliance and safety in civil engineering projects.

## Table of Contents

- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Built With

- React.js (Bootstrapped using create-react-app)
- Node.js
- Express.js
- OpenAI API
- Langchain (LLaMA embeddings)

## Getting Started

To get the CCQ AI Assistant up and running on your local machine, follow these steps:

### 1. Clone the Repository
Clone this repository to your local machine to get started.

### 2. Install Dependencies
Navigate to the project directory and install the required dependencies for both the backend and frontend.

```bash
# Install backend dependencies
cd backend
npm install

# Navigate back to the project root
cd ..

# Install frontend dependencies
cd frontend
npm install
```

### 3. Configure Environment Variables

Create a .env file in both the backend and frontend directories for environment variables:
- Backend .env: Include your OpenAI API key as OPENAI_API_KEY.
- Frontend .env: Specify your backend URL as REACT_APP_BACKEND_URL (use localhost:8080 if running locally).

### 4. Run the App

```bash
# Start the backend service
cd backend
npm run start

# Open a new terminal and navigate to the frontend directory
cd ../frontend
npm run start
```

## Usage

Once the CCQ AI Assistant is running, you can begin to validate project descriptions or ask questions about the Quebec Construction Code. Enter your query in the provided input field and submit it. The assistant will process your request and return relevant information or validation results.

## Troubleshooting

If you encounter any issues during the installation or while using the application, consider checking the following: 
- Ensure Node.js is installed and up to date.
- Verify that all .env files are correctly set up with the necessary API keys and URLs.
- Check for any error messages in the console for specific issues to address.

## Contributing
We welcome contributions to the CCQ AI Assistant project! If you have suggestions for improvements or want to contribute code, please open an issue or pull request on GitHub.
