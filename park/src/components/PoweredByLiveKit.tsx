import Image from "next/image";
import React from "react";

export const PoweredByLiveKit = () => {
  return (
    <div className="h-full">
      <a
        target="_blank"
        className="flex flex-col items-center justify-center h-full sm:flex-row"
        rel="noreferrer"
        href="https://park.bdisc.golf"
      >
        <div className="mr-0 text-xs text-primary sm:mr-2">Powered by</div>
        <div className="sm:h-full h-[20px] w-[60px] relative">
          <Image
            alt="livekit logo"
            style={{ objectFit: "contain" }}
            fill={true}
            src="/livekit/logo.svg"
          />
        </div>
      </a>
    </div>
  );
};
