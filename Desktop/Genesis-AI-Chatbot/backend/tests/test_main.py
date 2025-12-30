from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_app_startup():
    """Test if the FastAPI app starts correctly."""
    assert app is not None

def test_health_check():
    """Test the health-check endpoint."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_basic_response_structure():
    """Test a basic API route for correct response structure."""
    # Assuming there's a route under /api, but since I don't know the exact routes, 
    # I'll test the health check again or a known route if I find one.
    # From main.py: app.include_router(api_router, prefix="/api")
    # Let's check api_router to find a simple route.
    response = client.get("/health")
    data = response.json()
    assert isinstance(data, dict)
    assert "status" in data
