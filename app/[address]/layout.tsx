"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { address } = useParams<{ address: string }>();

  return (
    <div className="flex h-screen flex-col items-center">
      <Card className="mx-auto mt-10 w-full max-w-md p-2">
        <CardHeader>
          <CardTitle>Simple Twitter Clone</CardTitle>
          <CardDescription>{address}</CardDescription>
        </CardHeader>
      </Card>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
