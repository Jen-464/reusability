export type EventType = {
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