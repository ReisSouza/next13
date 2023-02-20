import Link from 'next/link'

export const metadata = {
  title: 'IoNext',
}

export default async function Home() {
  return (
    <main>
      <h1>Hello word</h1>
      <Link href="/app/dashboard">Dashboard</Link>
    </main>
  )
}
