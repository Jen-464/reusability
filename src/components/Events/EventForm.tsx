import { useState } from "react";
import type { EventType } from "./EventType";
import { createEvent } from "./EventService";

export function EventForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [organizerId, setOrganizerId] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("is this running?")
    e.preventDefault();

    const payload: EventType = {
      event: {
        name: { html: name },
        description: { html: description },
        start: {
          timezone: "America/Los_Angeles",
          utc: "2025-09-01T17:00:00Z",
        },
        end: {
          timezone: "America/Los_Angeles",
          utc: "2025-09-01T19:00:00Z",
        },
        currency: "USD",
        capacity: 100,
        online_event: true,
        organizer_id: organizerId,
        listed: true,
        shareable: true,
        invite_only: false,
        show_remaining: true,
        password: "",
        is_reserved_seating: false,
        is_series: false,
        show_pick_a_seat: false,
        show_seatmap_thumbnail: false,
        show_colors_in_seatmap_thumbnail: false,
        locale: "en_US",
      },
    };

    try {
      const res = await createEvent(payload);
      console.log("Event created:", res);
    } catch (err) {
      console.error("Error creating event:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Description:
        <input value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <br />
      <label>
        Organizer ID:
        <input value={organizerId} onChange={(e) => setOrganizerId(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Create Event</button>
    </form>
  );
}
