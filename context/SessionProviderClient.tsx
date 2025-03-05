'use client'

import { ProviderProps } from '@/interfaces/interfaceProvider'
import { SessionProvider } from 'next-auth/react'
import { UserProvider } from './UserProvider'

export function SessionProviderClient({ children }: ProviderProps) {

    return (
        <SessionProvider >
            <UserProvider>
                {children}
            </UserProvider>
        </SessionProvider>
    )
}