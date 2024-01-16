import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { User } from "@nextui-org/react";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { Button } from "~/styles/ui/button";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

          <div className="flex flex-col items-center justify-center gap-8">
           
           <div className="max-w-[250px]">
           {session &&  <User   
                  name={session?.user.name}
                  description={session?.user.email}
                  avatarProps={{
                    src: `${session?.user.image}`
                  }}
              />}
           </div>

           
             
            
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full px-10 py-3 font-semibold no-underline transition"
            >
              <Button>
                {session ? "Sign out" : "Sign in"}
              </Button>
              
            </Link>
          </div>


        <CrudShowcase />
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
