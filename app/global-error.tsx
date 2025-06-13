"use client";

import { Button } from "@/components/ui/button";
import { Github, RefreshCcw } from "lucide-react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <div className="bg-background flex h-screen w-full flex-col items-center justify-center gap-4">
          <h2>Something went wrong!</h2>
          <p className="max-w-3xl text-center text-sm/6 text-balance">
            {error.message}
          </p>
          <div className="grid grid-cols-2 items-center justify-center gap-2">
            <a
              href="https://github.com/Axyl1410/twitter-clone/issues/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="flex cursor-pointer items-center gap-2">
                {/* 'Github' logo is deprecated. */}
                <Github className="h-4 w-4" />
                Report Error on GitHub
              </Button>
            </a>
            <Button
              className="flex cursor-pointer items-center gap-2"
              onClick={() => window.location.reload()}
              variant={"outline"}
            >
              <RefreshCcw className="h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
