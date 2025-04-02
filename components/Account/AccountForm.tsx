import Image from 'next/image'
import { type User } from '@supabase/supabase-js'
import Divider from '../Visuals/Divider'
import Form from '../Form/Form'


export default function AccountForm({ user }: { user: User | null }) {

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2 bg-white dark:bg-gray-800 sm:col-start-1 sm:row-start-2'>
                <div className='text-gray-500'>Logged in as {user?.email}</div>
                {user?.user_metadata.name && <div className='text-gray-500'>Welcome: {user?.user_metadata.name}</div>}
                {user?.identities?.[0]?.provider === 'google' && <Image src={user?.user_metadata?.picture} alt='User avatar' width={70} height={70} className='rounded-full' />}
            </div>
            <Divider />

            <Form action='/auth/signout' method='post' contentButton='Sign out' className='gap-2 py-2 grow sm:row-start-2' />
        </>
    )



    /*   const [email, setEmail] = useState(user?.email ?? '')
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
  }, [user]) */


}

{/*    {user?.identities?.[0]?.provider === 'email' && (
                    <Avatar
                        uid={user?.id}
                        url={user?.user_metadata?.avatar_url}
                        size={150}
                        onUpload={async (url) => {
                            const { error } = await supabase.auth.updateUser({
                                data: { avatar_url: url },
                            })
                            if (error) alert('Error uploading avatar!')
                        }}
                    />
                )} */}


{/*       <form onSubmit={handleSubmit} className='flex flex-col col-start-2 row-start-2 gap-2'>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className='w-full px-2 py-1 mb-4 text-gray-700 border rounded dark:bg-gray-900 dark:text-white'
                />
                <button type='submit' disabled={loading} className='block p-1 border border-gray-400 rounded-sm button'>
                    {loading ? 'Loading ...' : 'Update'}
                </button>
            </form> */}