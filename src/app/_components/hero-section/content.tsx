"use client";
import BlurText from "@/components/ui/blur-text";
import React from "react";
import { HeroContentProps } from "./hero";
import SocialLinks from "@/components/social-links";
import ProfileCard from "@/components/card/portfolio-card";

const HeroContent = ({ user }: HeroContentProps) => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className=" flex flex-col md:flex-row gap-10 justify-center items-center mt-12 md:mt-0 ">
      <div className="md:w-1/2">
        <BlurText
          onAnimationComplete={handleAnimationComplete}
          text={`Hello, I'm`}
          className="text-1xl justify-center md:justify-start font-bold"
        />
        <BlurText
          onAnimationComplete={handleAnimationComplete}
          text={user?.name}
          className="text-5xl justify-center md:justify-start font-bold  "
        />

        <BlurText
          onAnimationComplete={handleAnimationComplete}
          text={`Full Stack Developer`}
          className="text-3xl justify-center md:justify-start font-bold text-[#7658ed]"
        />
        <div className="mt-4 max-w-lg">
          <BlurText
            onAnimationComplete={handleAnimationComplete}
            text={user?.bio}
            className="text-1xl justify-center md:justify-start font-bold leading-relaxed"
            animateBy="words"
          />
        </div>
        <div className="flex flex-row gap-4 mt-4 justify-center md:justify-start">
          <SocialLinks socialLinks={user?.socialLinks} />
        </div>
      </div>
      <div className="md:w-1/3">
        <ProfileCard
          name="Tsahi Pahima"
          title=""
          handle="tsahipahima"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/avatar.png"
          miniAvatarUrl="/avatar.jpg"
          behindGradient=""
          innerGradient=""
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

export default HeroContent;
