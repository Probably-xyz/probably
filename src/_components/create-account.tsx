/* eslint-disable @typescript-eslint/no-implied-eval */
"use client";

import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";
import { Button } from "~/styles/ui/button";

import { api } from "~/trpc/react";

export function CreateFounder() {
  const router = useRouter();
  const createFounder = api.founder.create.useMutation({
    onSuccess: () => {
      toast.success("Account created - enjoy");
      router.push("/dashboard");
    },
   });


  return (
    <form onSubmit={() => createFounder.mutate()}>
      <Button type="submit" size="lg" disabled={createFounder.isLoading}>
        {createFounder.isLoading ? (
          <FaSpinner className="animate-spin" />
        ) : (
          "Join"
        )}
      </Button>
    </form>
  );
}

export function CreateInvestor() {
  const router = useRouter();

  const createInvestor = api.investor.create.useMutation({
    onSuccess: () => {
      toast.success("Account created - enjoy");
      router.push("/dashboard");
    },
  });

  return (
    <form
      onSubmit={() => {
        createInvestor.mutate();
      }}
    >
      <Button type="submit" size="lg" disabled={createInvestor.isLoading}>
        {createInvestor.isLoading ? (
          <FaSpinner className="animate-spin" />
        ) : (
          "Join"
        )}
      </Button>
    </form>
  );
}
