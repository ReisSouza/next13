import Link from 'next/link'
import React from 'react'

const Sign = () => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Link href="/forgotPassword">Recuperar senha</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}

export default Sign
