import { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'IoNext',
    template: '%s | IoNext',
  },
}

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <body>{children}</body>
    </html>
  )
}
