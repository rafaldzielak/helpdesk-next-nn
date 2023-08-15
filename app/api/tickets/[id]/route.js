import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const res = await fetch("http://localhost:4000/tickets/" + params.id, {
    // next: { revalidate: 0 } // force-dynamic does the same
  });
  if (!res.ok) return NextResponse.json("Not found", { status: 404 });

  const ticket = await res.json();
  return NextResponse.json(ticket, { status: 200 });
}
