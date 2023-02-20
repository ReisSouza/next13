import { Repos, StaticComponent, User } from '@/components'
import Link from 'next/link'
import React, { Suspense } from 'react'

export const metadata = {
  title: 'Dashboard',
  description: 'Description for page dashboard',
}

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link href="/">Home</Link>
      <StaticComponent />
      <Suspense fallback={<p>Carregando user</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
      <Suspense fallback={<p>Carregando repos</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repos />
      </Suspense>
    </div>
  )
}

export default Dashboard
