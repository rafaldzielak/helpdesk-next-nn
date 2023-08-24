"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addTicket(formData) {
  const ticket = Object.fromEntries(formData);

  const supabase = createServerActionClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { error } = await supabase.from("Tickets").insert({ ...ticket, user_email: session.user.email });
  if (error) console.log({ error, data, status });

  revalidatePath("/tickets");
  redirect("/tickets");
}
