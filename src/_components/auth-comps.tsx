/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import { Button } from '~/styles/ui/button'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams?.get("next");
  const [showEmailOption, setShowEmailOption] = useState(false);
  const [showSSOOption, setShowSSOOption] = useState(false);
  const [noSuchAccount, setNoSuchAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [clickedGoogle, setClickedGoogle] = useState(false);
  const [clickedEmail, setClickedEmail] = useState(false);
  const [clickedSSO, setClickedSSO] = useState(false);

  useEffect(() => {
    const error = searchParams?.get("error");
    error && toast.error(error);
  }, [searchParams]);

  return (
    <>
      <GoogleBtn />
      <GithubBtn/>
      
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setClickedEmail(true);
          
                signIn("email", {
                  email,
                  redirect: false,
                  
                }).then((res) => {
                  setClickedEmail(false);
                  if (res?.ok && !res?.error) {
                    setEmail("");
                    toast.success("Email sent - check your inbox!");
                  } else {
                    toast.error("Error sending email - try again?");
                  }
                });
              } 
        }
        className="flex flex-col space-y-3"
      >
        {showEmailOption && (
          <div>
            <div className="mb-4 mt-1 border-t border-gray-300" />
            <input
              id="email"
              name="email"
              autoFocus
              type="email"
              placeholder="panic@thedis.co"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setNoSuchAccount(false);
                setEmail(e.target.value);
              }}
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            />
          </div>
        )}
        <Button
         
        
          {...(!showEmailOption && {
            type: "button",
            onClick: (e: { preventDefault: () => void; }) => {
              e.preventDefault();
              setShowSSOOption(false);
              setShowEmailOption(true);
            },
          })}
          disabled={clickedGoogle || clickedSSO}
        >
          Continue with email
        </Button>
      </form>
    </>
  );
}

export const GoogleBtn = () => {
  return (
    <Button size="lg" variant="outline" onClick={() => { signIn("google", {}) }}>
     <FaGoogle className="mr-2 h-4 w-4 my-auto"/>
     Continue with Google
    </Button>
  )
}

export const GithubBtn = () => {

  return (
    <Button size="lg" variant="outline" onClick={() => { signIn("github", {}) }}>
      <FaGithub className="mr-2 h-4 w-4"/>
      Continue with Github
    </Button>
  )
}

export const LogoutBtn = () => {
  return (
    <Button onClick={() => signOut()}>
      Logout
    </Button>
  )
}
