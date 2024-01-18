import { redirect } from "react-router-dom";
import { updateNote } from "../../models/db";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function userAction({request, params}:any) {
  const {searchParams} = new URL(request.url);
  const formData = await request.formData();
  const userId = params.userId;
  const name = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  await updateNote(userId, name, email, password);

  return redirect(`/regiter/${userId}?${searchParams}`);
}