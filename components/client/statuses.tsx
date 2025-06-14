"use client";

import { CONTRACT_ADDRESS } from "@/constants";
import { formatAddress } from "@/lib/utils";
import getThirdwebContract from "@/services/get-contract";
import Link from "next/link";
import { prepareEvent } from "thirdweb";
import { useContractEvents } from "thirdweb/react";

const preparedEvent = prepareEvent({
  signature:
    "event StatusUpdated(address indexed user, string newStatus, uint256 timestamp)",
});

export function Statuses() {
  const contract = getThirdwebContract(CONTRACT_ADDRESS);

  const { data: event, isPending } = useContractEvents({
    contract,
    events: [preparedEvent],
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {event
        ?.slice()
        .sort((a, b) => Number(b.args.timestamp) - Number(a.args.timestamp))
        .map((e) => (
          <div key={e.transactionHash} className="w-full max-w-md border-b p-4">
            <p>
              <Link href={`/${e.args.user}`}>
                <strong>{formatAddress(e.args.user)}</strong>{" "}
              </Link>
              <em>{e.args.newStatus}</em>
            </p>
            <p className="text-sm text-gray-500">{e.args.timestamp}</p>
          </div>
        ))}
    </>
  );
}
