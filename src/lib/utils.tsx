import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  
export const handleSessionStorage = {
    set: (key: string, value: string) => {
      sessionStorage.setItem(key, JSON.stringify(value));
    },
    get: (key: string) => {
      return JSON.parse(sessionStorage.getItem(key) || "null");
    },
    remove: (key: string) => {
      sessionStorage.removeItem(key);
    },
    clear: () => {
      sessionStorage.clear();
    },
  };
  