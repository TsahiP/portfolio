"use client";
import React, { useEffect, useRef, useCallback, useMemo } from "react";
import "./ProfileCard.css";
import ProfileCardComponent, { ProfileCardProps } from "./profile-card-component";
import Link from "next/link";

type ClientProfileCardProps = Omit<ProfileCardProps, 'onContactClick'>;

export default function ProfileCard(props: ClientProfileCardProps) {
  const handleContactClick = () => {
    return document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return <ProfileCardComponent {...props} onContactClick={handleContactClick} />;
}
