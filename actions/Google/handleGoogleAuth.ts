'use server'

import { Session } from 'next-auth'
import { signIn, signOut } from '@/app/api/auth/auth'
import { revalidatePath } from 'next/cache'

export const handleGoogleAuth = async ({ session }: { session: Session }): Promise<Response | void> => {

    if (session && session.user) {
        await signOut({ redirect: true, redirectTo: '/' })
    } else {
        await signIn()
    }
    revalidatePath('/')
}