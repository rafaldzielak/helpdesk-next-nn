"use client";

import React, { useState } from "react";

import { TiDelete } from "react-icons/ti";

const DeleteTicket = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    console.log("Deleting id: ", id);
  };

  return (
    <button className='btn-primary' onClick={handleClick} disabled={isLoading}>
      <TiDelete />
      {isLoading ? "Deleting..." : "Delete ticket"}
    </button>
  );
};

export default DeleteTicket;
