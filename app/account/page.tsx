import AccountForm from '@/components/Account/AccountForm'
import { createClient } from '@/supabase/server'
export default async function AccountPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log('user', user)
  return <AccountForm user={user} />
}