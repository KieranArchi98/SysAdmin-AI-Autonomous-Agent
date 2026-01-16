from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_incidents():
    return {"incidents": []}
