'use server'

import { createClient } from '@/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function handleGoogleLogIn() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    })
    if (data.url) {
        redirect(data.url)
    }
    if (error) {
        console.log(error)
        return
    }
    if (data) {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
            const { id, email, created_at } = user
            console.log(id, email, created_at)
            revalidatePath('/account', 'layout')
            redirect('/account')
        }
    }
}