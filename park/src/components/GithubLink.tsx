import Image from "next/image";
import React from "react";

export const GithubLink = () => {
  return (
    <div className="h-full">
      <a
        target="_blank"
        className="flex flex-col items-center justify-center h-full sm:flex-row"
        rel="noreferrer"
        href="https://discord.gg/vnJu3ZWVKy"
      >
        <div className="mr-0 text-xs text-secondary sm:mr-2">Subscribe to create events</div>
        <div className="h-[30px] w-[30px] relative">
          <Image
            alt="livekit logo"
            style={{ objectFit: "contain" }}
            fill={true}
            src="/github.png"
          />
        </div>
      </a>
    </div>
  );
};
