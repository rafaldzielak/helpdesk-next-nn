"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className='btn-primary' disabled={pending}>
      <span>{pending ? "Submitting..." : "Submit"}</span>
    </button>
  );
};

export default SubmitButton;
