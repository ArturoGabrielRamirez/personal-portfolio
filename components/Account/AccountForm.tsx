'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/supabase/client'
import { type User } from '@supabase/supabase-js'
import Link from 'next/link'

export default function AccountForm({ user }: { user: User | null }) {
    const [email, setEmail] = useState(user?.email ?? '')
    const [loading, setLoading] = useState(false)
    const supabase = createClient()

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            setLoading(true)

            const { error } = await supabase.auth.updateUser({ email })
            if (error) {
                alert(error.message)
            } else {
                alert('Email updated!')
            }
            setLoading(false)
        },
        [email, supabase]
    )

    useEffect(() => {
        if (user) {
            setEmail(user.email ?? '')
        }
    }, [user])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading ...' : 'Update'}
                </button>

            </form>
            <form action="/auth/signout" method="post">
                <button className="button block" type="submit">
                    Sign out
                </button>
            </form>
        </div>
    )


}