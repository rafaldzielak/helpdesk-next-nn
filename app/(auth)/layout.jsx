import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h1>Helpdesk</h1>
        <Link href='/signup'>Sign up</Link>
        <Link href='/login'>Log in</Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
