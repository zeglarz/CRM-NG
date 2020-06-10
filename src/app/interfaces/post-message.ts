export interface PostMessage {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostMessageAuthor {
  id: number;
  name: string;
  username: string;
  email: string;
}
