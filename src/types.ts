export interface Member {
  code: string;
  email?: string;
  firstName: string;
  lastName: string;
  type: "attendee" | "volunteer" | "speaker";
}
