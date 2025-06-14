"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CONTRACT_ADDRESS } from "@/constants";
import getThirdwebContract from "@/services/get-contract";
import { motion } from "motion/react";
import React from "react";
import { toast } from "sonner";
import { prepareContractCall, sendTransaction } from "thirdweb";
import { useActiveAccount } from "thirdweb/react";

export default function SetStatus() {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const account = useActiveAccount();

  if (!account) {
    return <div>Please connect your wallet to set status.</div>;
  }

  const onClick = async (status: string) => {
    setLoading(true);
    const contract = getThirdwebContract(CONTRACT_ADDRESS);
    const transaction = prepareContractCall({
      contract,
      method: "function setStatus(string _status)",
      params: [status],
    });

    await sendTransaction({
      transaction,
      account,
    })
      .catch((error) => {
        toast.error(
          `Failed to set status: ${error.message || "Unknown error"}`,
        );
      })
      .then(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Textarea
        placeholder="What's on your mind?"
        className="my-4"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <Button
        onClick={() => onClick(status)}
        className="w-fit max-w-md cursor-pointer"
        disabled={loading}
      >
        <motion.span
          key={loading ? "loading" : "set-status"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {loading ? "Loading..." : "Set Status"}
        </motion.span>
      </Button>
    </>
  );
}
