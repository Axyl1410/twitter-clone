import SetStatus from "@/components/client/set-status";
import { Statuses } from "@/components/client/statuses";
import { WalletConnectButton } from "@/components/client/wallet-connect-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "@/lib/thirdweb";
import { ConnectButton } from "thirdweb/react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Card className="mx-auto mt-10 w-full max-w-md p-2">
        <CardHeader>
          <CardTitle>Simple Twitter Clone</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="sr-only">
            <ConnectButton client={client} />
          </div>
          <WalletConnectButton />
          <SetStatus />
        </CardContent>
      </Card>
      <Statuses />
    </div>
  );
}
