export const HOMEOWNER = {
  name: "Jessica",
  address: "123 Maple St, Unit 4B",
};

export const REQUEST_STATS = [
  { label: "In progress", value: 2, tone: "blue" as const },
  { label: "Scheduled", value: 1, tone: "amber" as const },
  { label: "Completed", value: 3, tone: "green" as const },
  { label: "Action needed", value: 0, tone: "red" as const },
];

export const RECENT_REQUESTS = [
  {
    id: "1",
    title: "Kitchen sink is leaking",
    address: "123 Maple St, Unit 4B",
    status: "In progress",
    statusTone: "amber" as const,
    meta: "Updated 2h ago",
    icon: "droplet" as const,
  },
  {
    id: "2",
    title: "AC not cooling properly",
    address: "123 Maple St, Unit 4B",
    status: "Scheduled",
    statusTone: "green" as const,
    meta: "Tomorrow 9:00 AM",
    icon: "wind" as const,
  },
  {
    id: "3",
    title: "Garage door making noise",
    address: "123 Maple St, Unit 4B",
    status: "Completed",
    statusTone: "muted" as const,
    meta: "Completed May 16",
    icon: "garage" as const,
  },
];

export const RESOURCE_CARDS = [
  { title: "Home maintenance tips", desc: "Seasonal checklists & guides", icon: "book" as const },
  { title: "How Allai works", desc: "See the full resident journey", icon: "spark" as const },
  { title: "Find a trusted pro", desc: "Browse vetted contractors", icon: "search" as const },
];

export const MAYA_QUICK_REPLIES = [
  "From the pipe",
  "From the faucet",
  "From the drain",
  "Not sure",
];

export type MayaChatMessage = {
  id: string;
  role: "maya" | "user";
  text: string;
  time: string;
};

/** Initial thread copy — Figma node 17:63 */
export const MAYA_INITIAL_MESSAGES: MayaChatMessage[] = [
  {
    id: "m1",
    role: "maya",
    text: "Hi Jessica! I'm Maya, your AI maintenance concierge. What can I help you with today?",
    time: "9:00 AM",
  },
  {
    id: "m2",
    role: "maya",
    text: "Tell me what's going on—photos and videos help me diagnose faster.",
    time: "9:01 AM",
  },
  {
    id: "u0",
    role: "user",
    text: "My kitchen sink is leaking.",
    time: "9:02 AM",
  },
  {
    id: "m3",
    role: "maya",
    text: "Thanks—that helps. Where is the leak coming from?",
    time: "9:03 AM",
  },
];

export const REQUEST_TIMELINE = [
  {
    id: "created",
    title: "Request created",
    body: "Maya analyzed the issue and created your request.",
    time: "9:05 AM",
    state: "done" as const,
  },
  {
    id: "matching",
    title: "Finding the best pros",
    body: "We're matching you with available, trusted pros. Usually takes a few minutes.",
    state: "active" as const,
  },
  {
    id: "quotes",
    title: "Quotes incoming",
    body: "You'll receive quotes to review and choose from.",
    state: "pending" as const,
  },
  {
    id: "done",
    title: "Work gets done",
    body: "Sit back while we take care of the rest.",
    state: "pending" as const,
  },
];
