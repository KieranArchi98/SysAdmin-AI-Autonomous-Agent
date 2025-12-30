# CI/CD Pipeline Overview

Genesis AI Chatbot uses **GitHub Actions** for continuous integration and deployment.

## Workflow Highlights

1. **Trigger**
   - On `push` or `pull_request` to `main` or `develop` branch

2. **Steps**
   1. Checkout repository
   2. Set up Python (backend) and Node.js (frontend)
   3. Set up Docker Buildx
   4. Install dependencies:
      - Backend: `pip install -r backend/requirements.txt`
      - Frontend: `npm ci --prefix frontend`
   5. Build Docker images:
      - `llm-chatbot-backend:ci`
      - `llm-chatbot-frontend:ci`
   6. Optional: push images to Docker Hub or GitHub Container Registry
   7. Placeholder steps for future testing (pytest / Jest)

## Benefits

- Automates Docker image builds on every commit
- Prepares repo for full CI/CD deployment
- Ensures reproducibility and consistency across environments
- Ready for automated testing and deployment in future phases
