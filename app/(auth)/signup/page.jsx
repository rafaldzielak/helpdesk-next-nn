"use client";

import React from "react";
import AuthForm from "../AuthForm";

const Signup = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <main>
      <h2 className='text-center'>Sign up</h2>;
      <AuthForm />
    </main>
  );
};

export default Signup;
