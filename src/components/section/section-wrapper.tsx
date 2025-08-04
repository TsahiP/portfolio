import { cn } from "@/lib/utils";
import React from "react";
type SectionWarapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};
const SectionWarapper = (SectionWarapperProps: SectionWarapperProps) => {
  return (
    <div
      className={cn(
        "min-h-dvh flex items-center justify-center  py-16",SectionWarapperProps.className)} id={SectionWarapperProps.id}>
      {SectionWarapperProps.children}
    </div>
  );
};

export default SectionWarapper;
