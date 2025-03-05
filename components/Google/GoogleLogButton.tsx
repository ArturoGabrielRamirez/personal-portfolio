'use client'

import { Button } from '@/components/ui/button'
import { Session } from 'next-auth'
import { handleGoogleAuth } from '@/actions/Google/handleGoogleAuth'

const GoogleLogButton = (
    { className, session }:
        {
            className?: string,
            session: Session
        }) => {

    return (
        <Button
            onClick={() => handleGoogleAuth({ session })}
            className={`${className} 
            ${session && session.user
                    ? 'bg-red-500'
                    : 'bg-green-500'}`}>
            {
                session && session.user
                    ? 'Log Out'
                    : 'Log In with Google'
            }
        </Button>
    )

}
export default GoogleLogButton
