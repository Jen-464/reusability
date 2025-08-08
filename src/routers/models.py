# schemas.py

from pydantic import BaseModel
from typing import Optional


class Name(BaseModel):
    html: str = "<h1> Some title </h1>"


class Description(BaseModel):
    html: str = "<p> Some description </p>"


class EventTime(BaseModel):
    timezone: str = "UTC"
    utc: str = ""


class Event(BaseModel):
    name: Name = Name()
    description: Description = Description()
    start: EventTime = EventTime()
    end: EventTime = EventTime()
    currency: str = "USD"
    online_event: bool = False
    organizer_id: Optional[str] = None
    listed: bool = False
    shareable: bool = False
    invite_only: bool = False
    show_remaining: bool = True
    password: Optional[str] = None
    capacity: int = 100
    is_reserved_seating: bool = True
    is_series: bool = True
    show_pick_a_seat: bool = True
    show_seatmap_thumbnail: bool = True
    show_colors_in_seatmap_thumbnail: bool = True
    locale: str = "de_AT"


class EventRequest(BaseModel):
    event: Event
