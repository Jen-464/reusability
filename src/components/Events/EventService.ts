export interface EventPayload {
    event: {
      name: { html: string };
      description: { html: string };
      start: { timezone: string; utc: string };
      end: { timezone: string; utc: string };
      currency: string;
      capacity: number;
      online_event: boolean;
      organizer_id: string;
      listed: boolean;
      shareable: boolean;
      invite_only: boolean;
      show_remaining: boolean;
      password: string;
      is_reserved_seating: boolean;
      is_series: boolean;
      show_pick_a_seat: boolean;
      show_seatmap_thumbnail: boolean;
      show_colors_in_seatmap_thumbnail: boolean;
      locale: string;
    };
}

export interface CreateEventResponse {
    id: string;
    name: string;
}

export const createEvent = async (
    event: EventPayload
  ): Promise<CreateEventResponse> => {
    const response = await fetch("http://localhost:8000/create-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
  
    if (!response.ok) {
      throw new Error(`Failed to create event: ${response.status}`);
    }
  
    return response.json();
  };
  