# Amharic RAG Ad Builder
## Project Overview

The project is organized into several tasks to achieve the business goals:

1. **Literature Review & Huggingface Ecosystem (Task 1):**
   - Understand key concepts and methods related to LLMs.
   - Explore the Huggingface ecosystem for inference and fine-tuning.
   - Review relevant literature and resources.

2. **Load an LLM and Use It for Inference (Task 2):**
   - Set up the work environment.
   - Choose an open-source LLM and load it.
   - Test the model's inference capabilities for various scenarios.

3. **Data Preprocessing and Preparation (Task 3):**
   - Parse and clean raw Telegram message data.
   - Extract and remove unnecessary features.
   - Prepare the data for fine-tuning.

4. **Fine-Tuning the LLM (Task 4):**
   - Understand the key components of LLM training and fine-tuning.
   - Choose a base model and fine-tune it for Amharic text.
   - Explore Huggingface documentation for inference and fine-tuning.

5. **Build a RAG Pipeline to Generate Telegram Amharic Ad Posts (Task 5):**
   - Implement RAG techniques for Amharic text generation.
   - Retrieve relevant information from English and Amharic texts.
   - Evaluate and deploy the RAG pipeline with a simple frontend.

## Repository Structure

- **assets:** Contains additional project assets.
- **demo:** Includes any demonstration files or resources.
- **modeling:** Holds scripts and code related to model training and fine-tuning.
- **notebooks:** Jupyter notebooks for exploratory data analysis and documentation.
- **scripts:** Contains utility scripts for various tasks.
- **utils:** Utility functions and helper modules.
- **backend:** FastAPI backend for serving the RAG model.
- **frontend:** React frontend for a user-friendly interface.

## How to Use

1. Clone the repository: `git clone https://github.com/group-3-collab-team/Amharic-RAG-Ad-Builder.git`
2. Navigate to the `backend` directory: `cd backend`
3. Install dependencies: `pip install -r requirements.txt`
4. Run the FastAPI backend: `uvicorn main:app --reload`
5. Open a new terminal window, navigate to the `frontend` directory: `cd ../frontend`
6. Install frontend dependencies: `npm install`
7. Start the React frontend: `npm start`
8. Open your browser and go to `http://localhost:3000` to interact with the RAG Ad Builder.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to contribute, provide feedback, or use the code as needed!
