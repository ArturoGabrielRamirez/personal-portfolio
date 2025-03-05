'use client'

import { useSession } from 'next-auth/react'
import { createContext, useContext } from 'react'
import type { UserContext } from '@/types/typesUser'
import { ProviderProps } from '@/interfaces/interfaceProvider'

const UserContext = createContext<UserContext>({
    userEmail: null,
    session: null
})

export function UserProvider({ children }: ProviderProps) {

    const { data: session } = useSession<boolean>()
    const userEmail = session?.user?.email as string

    return (
        <UserContext.Provider value={{ userEmail, session }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}