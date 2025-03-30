"use server"
import { handleLogIn } from "../actions/handleLogIn"
import { handleSignup } from "../actions/handleSignup"
import { createClient } from "@/supabase/server"
import { handleGoogleLogIn } from "../actions/handleGoogleLogIn"

export default async function LoginPage() {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (user) {
        return <p>Already logged in</p>
    }



    console.log('user', user)

    return (
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={handleLogIn}>Log in</button>
                <button formAction={handleSignup}>Sign up</button>

            </form>
            <form>
                <div>
                    <p>Or log in with:</p>
                    <button formAction={handleGoogleLogIn}>Google</button>
                    {/*   <button formAction={supabase.auth.signInWithOAuth({ provider: 'github' })}>GitHub</button> */}
                </div>
            </form>

        </div>
    )
}