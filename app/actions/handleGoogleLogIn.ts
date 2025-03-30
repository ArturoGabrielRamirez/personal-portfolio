"use server"

import { createClient } from '@/supabase/server'
import { redirect } from 'next/navigation'

export async function handleGoogleLogIn() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/auth/callback',
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    })
    if (data.url) {
        redirect(data.url) // use the redirect API for your server framework
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
        }
    }
}