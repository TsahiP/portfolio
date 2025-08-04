"use client";
import React from "react";
import { UserConfig } from "@/lib/types/user.types";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
type socialLinksProps = {
  socialLinks?: UserConfig["socialLinks"];
};
const SocialLinks = ({ socialLinks }: socialLinksProps) => {
  return (
    <>
      {socialLinks?.map((socialLinks) => {
        return (
          <Link href={socialLinks.url} key={socialLinks.url}>
            {socialLinks.icon === "instagram" && (
              <FaInstagram className="text-2xl" />
            )}
            {socialLinks.icon === "github" && <FaGithub className="text-2xl" />}
            {socialLinks.icon === "linkedin" && <FaLinkedin className="text-2xl" />}
            {socialLinks.icon === "facebook" && <FaFacebook className="text-2xl" />}
          </Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
