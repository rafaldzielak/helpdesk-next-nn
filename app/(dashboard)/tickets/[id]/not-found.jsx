import Link from "next/link";
import React from "react";

const TicketNotFound = () => {
  return (
    <div className='text-center'>
      <h2 className='text-3xl'>There was a problem.</h2>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to all <Link href='/tickets'>tickets</Link>
      </p>
    </div>
  );
};

export default TicketNotFound;
