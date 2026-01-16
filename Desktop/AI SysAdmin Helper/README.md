# AI Security Analyst

Full-stack application for system administration and security monitoring.

## Structure

- `frontend/`: Electron + React (Vite)
- `backend/`: FastAPI + Python
- `scripts/`: Shared utilities
- `docs/`: System documentation
- `config/`: Configuration templates
- `data/`: Local data storage

## Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```
