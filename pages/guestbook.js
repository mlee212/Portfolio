import { getProviders, signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

export default function Guestbook({ providers }) {
  const [session, loading] = useSession()

  return (
    <>
      {!session && (
        <>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.username} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
