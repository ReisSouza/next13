import Link from 'next/link'
import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <div>
        <Link href="/signin">Login</Link>
      </div>
    </div>
  )
}

export default ForgotPassword
