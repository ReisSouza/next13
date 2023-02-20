import React from 'react'
import { cookies, headers } from 'next/headers'

const User = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const response = await fetch('https://api.github.com/users/reissouza', {
    cache: 'no-store',
  })

  const userCookies = cookies()
  const userHeader = headers()

  const user = await response.json()
  return (
    <div>
      {JSON.stringify(userCookies.getAll('rm_odonto_access_token'), null, 2)}
      <p>
        header
        {JSON.stringify(userHeader.entries(), null, 2)}
      </p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default User
