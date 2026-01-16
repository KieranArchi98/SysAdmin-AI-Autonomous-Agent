from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import logs, anomalies, incidents, users

app = FastAPI(title="AI Security Analyst API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(logs.router, prefix="/api/logs", tags=["Logs"])
app.include_router(anomalies.router, prefix="/api/anomalies", tags=["Anomalies"])
app.include_router(incidents.router, prefix="/api/incidents", tags=["Incidents"])
app.include_router(users.router, prefix="/api/users", tags=["Users"])

@app.get("/")
async def root():
    return {"message": "AI Security Analyst API is running"}
