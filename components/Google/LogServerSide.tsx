

import { auth } from '@/app/api/auth/auth'
import { Session } from 'next-auth'
import GoogleLogButton from './GoogleLogButton'

export default async function LogServerSide({ className }: {
    className?: string
}) {
    const session = await auth()
    return (
        <GoogleLogButton
            className={className}
            session={session as Session} />
    )
} 