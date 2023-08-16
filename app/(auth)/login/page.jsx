"use client";

import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    else router.push("/");
  };

  return (
    <main>
      <h2 className='text-center'>Log in</h2>;
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className='error'>{error}</div>}
    </main>
  );
};

export default Login;
