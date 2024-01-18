import { json } from "react-router-dom";
import { getNoteById } from "../../models/db";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function userDetailsLoader({ params }:any) {
  const user = await getNoteById(params.userId); //Go to Definition
  if (!user) return json({ user: null }, { status: 404 });
  console.log('this is user: ' + user)
  return json(user);
}