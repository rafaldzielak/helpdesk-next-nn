"use client";

import React, { useTransition } from "react";

import { TiDelete } from "react-icons/ti";
import { deleteTicket } from "../actions";

const DeleteTicket = ({ id }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button className='btn-primary' onClick={() => startTransition(() => deleteTicket(id))} disabled={isPending}>
      <TiDelete />
      {isPending ? "Deleting..." : "Delete ticket"}
    </button>
  );
};

export default DeleteTicket;
