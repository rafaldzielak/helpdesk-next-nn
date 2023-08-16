import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch("http://localhost:4000/tickets", {
    // next: { revalidate: 0 } // force-dynamic does the same
  });
  const tickets = await res.json();
  return NextResponse.json(tickets, { status: 200 });
}

export async function POST(request) {
  const ticket = await request.json();

  const supabase = createRouteHandlerClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from("Tickets")
    .insert({ ...ticket, user_email: session.user.email })
    .select()
    .single();

  return NextResponse.json({ data, error }, { status: 201 });
}
