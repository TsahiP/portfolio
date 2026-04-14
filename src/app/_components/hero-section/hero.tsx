"use client";
import ProfileCard from "@/components/card/portfolio-card";
import { UserConfig } from "@/lib/types/user.types";
import React from "react";
import HeroContent from "./content";

export interface HeroContentProps {
  user?: UserConfig;
}

const Hero = ({ user }: HeroContentProps) => {
  return (
    <div className=" w-full h-full flex md:flex-row lg:flex-row flex-col items-center justify-center gap-10">
      <div className="block lg:hidden md:hidden">
        <ProfileCard
          name="Tsahi Pahima"
          title=""
          handle="tsahipahima"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/avatar.png"
          miniAvatarUrl="/avatar.jpg"
          behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%)"
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          showUserInfo={true}
          enableTilt={true}
          iconUrl=""
          grainUrl=""
          showBehindGradient={true}
          className=""
        />
      </div>
      <HeroContent user={user} />
      <div className="hidden lg:block">
        <ProfileCard
          name="Tsahi Pahima"
          title=""
          handle="tsahipahima"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/avatar.png"
          miniAvatarUrl="/avatar.jpg"
          behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%)"
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          showUserInfo={true}
          enableTilt={true}
          iconUrl=""
          grainUrl=""
          showBehindGradient={true}
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
