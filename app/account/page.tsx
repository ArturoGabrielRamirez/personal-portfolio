import AccountForm from '@/components/Account/AccountForm'
import { createClient } from '@/supabase/server'
import Title from '@/components/Title/Title'
import GridForms from '@/components/Visuals/GridForms'

export default async function AccountPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <GridForms className='grid grid-rows-[30px_1fr_1fr] grid-cols-[1fr] sm:grid-rows-[40px_1fr] sm:grid-cols-[1fr_1px_1fr] grow items-center justify-center bg-white dark:bg-gray-800 sm:gap-x-20 sm:p-8'>
      <Title title='Account' className='' />
      <AccountForm user={user} />
    </GridForms>
  )
}