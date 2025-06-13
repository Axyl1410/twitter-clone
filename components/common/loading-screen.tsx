"use client";

import loadingAnimation from "@/public/loading-screen.json";
import Lottie from "lottie-react";

export default function LoadingScreen() {
  return (
    <div className="bg-background fixed inset-0 z-50 flex items-center justify-center">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        autoplay
        className="h-48 w-48 lg:h-64 lg:w-64 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96"
      />
    </div>
  );
}
