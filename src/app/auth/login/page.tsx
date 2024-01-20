import { AuthForm, GithubBtn, GoogleBtn, SigninEmail } from "~/_components/auth-comps";
import { GridGradient, HalfGrid } from "~/_components/bg-comps";
import { ubuntu } from "~/lib/fonts";
import { getServerAuthSession } from "~/server/auth";

export default async function SignInButton() {
  const session = await getServerAuthSession()
  return (
    <>
      <HalfGrid/>
      <div className="container flex flex-col mx-auto items-center justify-center min-h-[75vh]">
          <div className="justify-center items-center">
              <h1 className="text-4xl text-center mb-10" style={ubuntu.style}>
                Login to Probably
              </h1>
              
              {/* <div className="w-[400px] space-y-4 flex flex-col">
                <SigninEmail/>
                <div className="w-[350px border-t border-neutral-900 items-center justify-center">
                </div>
                <span className='mx-auto'> or </span>
                <GoogleBtn/>
                <GithubBtn/>
              </div> */}
              <AuthForm/>
          </div>
      </div>
    </>
  );
};

