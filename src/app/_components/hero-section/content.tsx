"use client";
import ProfileCard from "@/components/card/portfolio-card";
import BlurText from "@/components/ui/blur-text";
import { UserConfig } from "@/lib/types/user.types";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HeroContentProps } from "./hero";
import TrueFocus from "@/components/ui/text-focuse";
import SocialLinks from "@/components/social-links";

const HeroContent = ({ user }: HeroContentProps) => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div>
      <BlurText
        onAnimationComplete={handleAnimationComplete}
        text={`Hello, I'm`}
        className="text-1xl font-bold"
      />
      <BlurText
        onAnimationComplete={handleAnimationComplete}
        text={user?.name}
        className="text-5xl font-bold"
      />

      <BlurText onAnimationComplete={handleAnimationComplete} text={`Full Stack Developer`} className="text-3xl font-bold text-[#7658ed]" />
      <div className="mt-4 max-w-lg">
        <BlurText
          onAnimationComplete={handleAnimationComplete}
          text={user?.bio}
          className="text-1xl font-bold leading-relaxed"
          animateBy="words"
        />
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <SocialLinks socialLinks={user?.socialLinks} />
      </div>
    </div>
  );
};

export default HeroContent;
