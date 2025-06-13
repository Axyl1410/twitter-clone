"use client";

import { Button } from "@/components/ui/button";
import icon from "@/public/assets/lotties/404.json";
import Lottie from "lottie-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-background text-primary grid min-h-screen place-items-center px-6 lg:px-8">
      <div className="text-center">
        <div className="flex w-full items-center justify-center">
          <div className="w-[200px] md:w-[300px]">
            <Lottie animationData={icon} loop autoplay />
          </div>
        </div>
        <h1 className="text-primary text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
          Page not found
        </h1>
        <p className="text-primary mt-6 text-lg font-medium text-pretty sm:text-xl/8">
          Sorry, we couldn&rsquo;t find the page you&rsquo;re looking for.
        </p>
        <div className="mt-10 flex-col items-center justify-center gap-2 sm:flex sm:flex-row md:gap-6">
          <Link href="/">
            <Button className="cursor-pointer bg-blue-600 font-bold text-white hover:bg-blue-500">
              Go back home
            </Button>
          </Link>
          <a
            href="https://github.com/Axyl1410/"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant={"ghost"}
              className="mt-4 cursor-pointer font-bold sm:mt-0"
            >
              Contact support <span aria-hidden="true">→</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
