
import Link from 'next/link'
import { type User } from '@supabase/supabase-js'

export default function NavBar({ user }: { user: User | null }) {
    return (
        <nav className='flex items-center justify-between w-full px-2 text-white bg-gray-800'>
            <Link href='/' className='text-2xl font-bold'><h1 className='p-2'>Personal Portfolio</h1></Link>
            <div className='space-x-4'>
                {!user ? (
                    <>
                        <Link href='/login' className='p-2 hover:underline'>Log In</Link>
                        <Link href='/signup' className='p-2 hover:underline'>Sign Up</Link>
                    </>
                ) : (
                    <div className='flex'>
                        <Link href='/account' className='p-2 hover:underline'>Account</Link>
                        <form action='/auth/signout' method='post'>
                            <button className='p-2 hover:underline' type='submit'>
                                Sign out
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </nav>
    )
}