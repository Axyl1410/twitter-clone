"use client";

import { CONTRACT_ADDRESS } from "@/constants";
import getThirdwebContract from "@/services/get-contract";
import { useParams } from "next/navigation";
import { useReadContract } from "thirdweb/react";

export default function Page() {
  const { address } = useParams<{ address: string }>();

  const contract = getThirdwebContract(CONTRACT_ADDRESS);

  const { data, isPending } = useReadContract({
    contract,
    method: "function getStatus(address _user) view returns (string)",
    params: [address],
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No status found for this address.</div>;
  }

  console.log("Status data:", data);

  return <div>{data}</div>;
}
