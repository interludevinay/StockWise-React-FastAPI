from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200

def test_get_products():
    response = client.get("/products")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_create_product():
    product = {
        "id": 999,
        "name": "Test Item",
        "description": "API Test",
        "price": 99.99,
        "quantity": 5
    }

    response = client.post("/products", json=product)
    assert response.status_code == 200
    assert response.json()["name"] == "Test Item"

def test_update_product():
    updated = {
        "id": 999,
        "name": "Updated Item",
        "description": "Updated",
        "price": 199.99,
        "quantity": 10
    }

    response = client.put("/products/999", json=updated)
    assert response.status_code == 200

def test_delete_product():
    response = client.delete("/products/999")
    assert response.status_code == 200
