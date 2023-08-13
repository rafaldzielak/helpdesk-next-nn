import React from "react";
import { notFound } from "next/navigation";

export const dynamicParams = true; //it will try to fetch the ticket with id that is not generated below

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();
  return tickets.map((ticket) => ({ id: ticket.id }));
}

async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60, // it will regenerate after 60 seconds
    },
  });

  if (!res.ok) notFound();

  return res.json();
}

const TicketDetails = async ({ params }) => {
  const id = params.id;
  const ticket = await getTicket(id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
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