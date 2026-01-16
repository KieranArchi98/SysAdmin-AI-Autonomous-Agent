from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_logs():
    return {"logs": []}

@router.post("/ingest")
async def ingest_log(data: dict):
    return {"status": "success", "message": "Log ingested"}
