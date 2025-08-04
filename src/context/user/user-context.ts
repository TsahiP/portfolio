"use client";
import { UserConfig } from '@/lib/types/user.types';
import { createContext } from 'react';

interface UserContextType {
    user: UserConfig | null;
    isLoading: boolean;
    setUser?: (user: UserConfig | null) => void;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    isLoading: true,
});



