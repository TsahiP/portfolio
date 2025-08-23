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
    <div className=" w-full h-full flex flex-row items-center justify-center gap-10">
      <HeroContent user={user} />
    </div>
  );
};

export default Hero;
