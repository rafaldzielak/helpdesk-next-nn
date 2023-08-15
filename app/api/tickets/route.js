import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch("http://localhost:4000/tickets", {
    // next: { revalidate: 0 } // force-dynamic does the same
  });
  const tickets = await res.json();
  return NextResponse.json(tickets, { status: 200 });
}
