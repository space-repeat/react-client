import { Models } from "appwrite";

export type Stack = Models.Document & { title: string, user: string }

export interface FlashCardContent { text: string; img?: string }