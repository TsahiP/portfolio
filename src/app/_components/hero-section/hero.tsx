"use client";
import ProfileCard from "@/components/card/portfolio-card";
import BlurText from "@/components/ui/blur-text";
import { UserConfig } from "@/lib/types/user.types";
import Link from "next/link";
import React from "react";
import { FaInstagram ,FaGithub ,FaLinkedin ,FaFacebook} from "react-icons/fa";
import HeroContent from "./content";

export interface HeroContentProps {
  user?: UserConfig;
}

const Hero = ({ user }: HeroContentProps) => {
  return (
    <div className=" w-full h-full flex flex-row items-center justify-center gap-10">
      <HeroContent user={user} />
      <div>
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
