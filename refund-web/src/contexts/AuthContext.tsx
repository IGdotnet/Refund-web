import { useState } from "react";

import { createContext } from "react";
import type { ReactNode } from "react";

type AuthContext = {
    session: null | userAPIResponse
}

export const AuthContext = createContext({ } as AuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [session, setSession] = useState<null | userAPIResponse>(null)
    return (
        <AuthContext.Provider value={{ session }}>
            {children}
        </AuthContext.Provider>
    )
}