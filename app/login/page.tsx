
import { handleLogIn } from "../actions/handleLogIn"
import { handleSignup } from "../actions/handleSignup"
import { createClient } from "@/supabase/server"

export default async function LoginPage() {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    console.log('user', user)

    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={handleLogIn}>Log in</button>
            <button formAction={handleSignup}>Sign up</button>
        </form>
    )
}