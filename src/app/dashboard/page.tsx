"use client";

import { signOut } from "next-auth/react";

const SignInButton = () => {
  return (
    <>
    <button
      className="bg-slate-600 px-4 py-2 text-white"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      Sign Out of GitHub
    </button>

    
    </>
  );
};

export default SignInButton;