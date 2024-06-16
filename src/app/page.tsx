import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Estamos en la Home</p>
      <a href="/pages/contact">contacto malo</a>
      <Link href="/pages/contact">to Contacto</Link>
    </main>
  )
}
