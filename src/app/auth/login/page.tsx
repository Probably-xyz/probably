import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { Button } from "~/styles/ui/button";

export default async function SignInButton() {
  const session = await getServerAuthSession()
  return (
    <>
      {session ? <Button> Logout </Button> : <Link href="/api/auth/signin"> Signin </Link>}
      {session ? <p> {session?.user.email} </p> : <p> Not signed in </p>}
    </>
  );
};

