import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black text-white font-elegant flex items-center justify-center px-6 py-16">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 drop-shadow">
          Your pledge has been received.
        </h1>

        <p className="text-yellow-100 text-lg mb-6">
          SOCIIETY is watching — not to judge, but to understand. Your presence, your energy, and your potential have been felt.
        </p>

        <p className="text-yellow-100 text-md mb-8">
          Stay present. Stay real. You never know when the system might choose you.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/">
            <a className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded shadow transition">
              Return Home
            </a>
          </Link>
          <a
            href="https://instagram.com/sociietyworld"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold py-3 px-6 rounded shadow transition"
          >
            Follow @sociietyworld
          </a>
        </div>
      </div>
    </div>
  )
}

