# Update Log - Testing & CI/CD Pipeline Implementation

## Date: 2025-12-30

### Backend Changes:
- [x] Setup `pytest` for backend testing.
- [x] Created `backend/tests/test_main.py` with start-up, health-check, and response structure tests.
- [x] Added `pytest`, `pytest-cov`, and `httpx` to `backend/requirements.txt`.

### Frontend Changes:
- [x] Setup `jest` and `react-testing-library` for frontend testing.
- [x] Created `frontend/tests/ChatArea.test.tsx` with chat input and rendering tests.
- [x] Added testing dependencies and scripts to `frontend/package.json`.
- [x] Created `frontend/jest.config.js` and `frontend/jest.setup.js`.

### CI/CD Pipeline Changes:
- [x] Updated `.github/workflows/ci-cd.yml` to include separate jobs for backend and frontend tests.
- [x] Configured the pipeline to only build Docker images if all tests pass.
- [x] Added coverage reporting to the test steps.
- [x] Added coverage and pipeline status badges to `README.md`.

