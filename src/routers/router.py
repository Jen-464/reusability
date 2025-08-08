from click.utils import R
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .users import get_organization_id
from .models import EventRequest
import os
import httpx

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

EVENTBRITE_TOKEN = os.getenv("VITE_APP_EVENTBRITE_TOKEN")

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/myevents")
async def get_eventbrite_events():
    org_id = await get_organization_id()
    url = f"https://www.eventbriteapi.com/v3/organizations/{org_id}/events/"
    headers = {
        "Authorization": f"Bearer {EVENTBRITE_TOKEN}"
    }   
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except httpx.HTTPStatusError as e:
        print(f"HTTP error: {e}")
        return {"error": str(e)}
    except Exception as err:
        print(f"Unexpected error: {err}")
        return {"error": str(err)}

@app.post("/create-event")
async def create_event(event: EventRequest):
    org_id = await get_organization_id()
    url = f"https://www.eventbriteapi.com/v3/organizations/{org_id}/events/"
    headers = {
        "Authorization": f"Bearer {EVENTBRITE_TOKEN}",
        "Content-Type": "application/json"
    }
    async with httpx.AsyncClient() as client:
        try:
            # Forward the POST request to Eventbrite API with the event data
            response = await client.post(url, json=event.dict(), headers=headers)
            response.raise_for_status()  # raise error for bad status codes

            # Return Eventbrite's successful response JSON
            return response.json()

        except httpx.HTTPStatusError as exc:
            # If Eventbrite returns an error, capture and return it
            return {"error": f"Eventbrite API error: {exc.response.status_code} - {exc.response.text}"}
        except Exception as e:
            return {"error": str(e)}