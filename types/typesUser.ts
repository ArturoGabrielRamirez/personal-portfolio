import { Session } from 'next-auth'

export type UserContext = {
    userEmail: string | null
    session: Session | null
}