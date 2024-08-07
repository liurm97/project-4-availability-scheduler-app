import { z } from "zod";

export const formSchema = z.object({
  eventName: z.string().min(1, {
    message: "Event name required",
  }),
  // Format is HH:MM:SS eg."00:00:00"
  start: z.string().time({ message: "Start time required" }),
  end: z.string().time({ message: "End time required" }),
  dates: z.array(z.date()).nonempty({ message: "Select dates for event" }),
});

export type EventData = {
  eventName: string;
  start: string;
  end: string;
  dates: Date[];
};

export interface FetchedData {
  event_name: string;
  id: number;
  Date: {
    start_datetime: string;
    end_datetime: string;
  }[];
}
[];
