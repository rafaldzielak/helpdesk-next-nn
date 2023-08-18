"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { TiDelete } from "react-icons/ti";

const DeleteTicket = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    const res = await fetch(`http://localhost:3001/api/tickets/${id}`, { method: "DELETE" });
    const json = await res.json();
    setIsLoading(false);
    if (json.error) console.log(json.error);
    else {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <button className='btn-primary' onClick={handleClick} disabled={isLoading}>
      <TiDelete />
      {isLoading ? "Deleting..." : "Delete ticket"}
    </button>
  );
};

export default DeleteTicket;
