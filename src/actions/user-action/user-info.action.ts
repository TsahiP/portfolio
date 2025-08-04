"use server";

import { userConfig } from "@/mock-db";
import { UserConfig } from "@/lib/types/user.types";
import { unstable_cache } from "next/cache";

const getCachedUserConfig = unstable_cache(
  async (userId: string, select?: Partial<Record<keyof UserConfig, boolean>>) => {
    try {
      return await userConfig.findUnique(userId, select);
    } catch (error) {
      console.error("Error fetching user config:", error);
      throw error;
    }
  },
  // Cache key generation function - this creates unique keys based on arguments
  ["user-config"],
  // Cache options
  {
    revalidate: 3600, // Cache for 1 hour (in seconds)
    tags: ["user-config"], // Add a tag for cache invalidation
  }
);



export async function getInfo(select?: Partial<Record<keyof UserConfig, boolean>>) {
  const userId = process.env.USER_ID;
  if(!userId){
    return undefined;
  }

  try {
    return await getCachedUserConfig(userId, select);
  }catch(error){
    console.error("Error fetching user info:", error);
    return undefined;
  }
}
