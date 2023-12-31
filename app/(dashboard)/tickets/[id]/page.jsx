import React from "react";
import { notFound } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import DeleteTicket from "./DeleteTicket";

export const dynamicParams = true; //it will try to fetch the ticket with id that is not generated below

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });

  const { data: ticket } = await supabase.from("Tickets").select().eq("id", params.id).single();

  return {
    title: `Helpdesk | ${ticket?.title || "Ticket not found"}`,
  };
}

async function getTicket(id) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("Tickets").select().eq("id", id).single();

  if (!data) return notFound();

  return data;
}

const TicketDetails = async ({ params }) => {
  const supabase = createServerComponentClient({ cookies });

  const id = params.id;
  const ticket = await getTicket(id);

  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className='ml-auto'>{data.session.user.email === ticket.user_email && <DeleteTicket id={ticket.id} />}</div>
      </nav>
      <div className='card'>
        <h3>{ticket.title}</h3>
        <small>Created by: {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </div>
    </main>
  );
};

export default TicketDetails;
