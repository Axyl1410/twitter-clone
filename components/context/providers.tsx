import { Toaster } from "@/components/ui/sonner";
import { ThirdwebProvider } from "thirdweb/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      {children}
      <Toaster />
    </ThirdwebProvider>
  );
}
