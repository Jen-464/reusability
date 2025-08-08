from fastapi import APIRouter
from dotenv import load_dotenv
import httpx
import os

load_dotenv()
EVENTBRITE_TOKEN = os.getenv("VITE_APP_EVENTBRITE_TOKEN")

app = APIRouter()

async def get_organization_id() -> str:
    url = "https://www.eventbriteapi.com/v3/users/me/organizations/"
    headers = {
        "Authorization": f"Bearer {EVENTBRITE_TOKEN}"
    }
    
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()
        return data["organizations"][0]["id"]

    except httpx.HTTPStatusError as e:
        print(f"HTTP error: {e}")
        return {"error": str(e)}

    except Exception as err:
        print(f"Unexpected error: {err}")
        return {"error": str(err)}