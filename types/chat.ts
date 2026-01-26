export type Message = {
  role: "user" | "assistant";
  content: string;
}

export type ChatState = {
  messages: Message[];
  isOpen: boolean;
  isLoading: boolean;
  input: string;
}
