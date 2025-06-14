"use client";

import Loading from "@/app/loading";
import { CONTRACT_ADDRESS } from "@/constants";
import { formatAddress } from "@/lib/utils";
import getThirdwebContract from "@/services/get-contract";
import { prepareEvent } from "thirdweb";
import { useContractEvents } from "thirdweb/react";

const preparedEvent = prepareEvent({
  signature:
    "event StatusUpdated(address indexed user, string newStatus, uint256 timestamp)",
});

export async function Statuses() {
  const contract = getThirdwebContract(CONTRACT_ADDRESS);

  const { data: event, isLoading } = useContractEvents({
    contract,
    events: [preparedEvent],
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {event?.reverse().map((e) => (
        <div key={e.transactionHash} className="w-full max-w-md border-b p-4">
          <p>
            <strong>{formatAddress(e.args.user)}</strong>{" "}
            <em>{e.args.newStatus}</em>
          </p>
          <p className="text-sm text-gray-500">{e.args.timestamp}</p>
        </div>
      ))}
    </>
  );
}
