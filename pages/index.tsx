import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen text-white flex items-center justify-center px-6 py-16 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/A_photograph_captures_four_fashionable_young_adult.png"
          alt="SOCIIETY background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-xl mb-6">
          Welcome to SOCIIETY
        </h1>

        <p className="text-lg md:text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
          A members-only fashion ecosystem for creatives, visionaries, and culture leaders. Designed for those who stand out — and finally want to belong.
        </p>

        <div className="space-y-6 text-yellow-100 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">About SOCIIETY</h2>
            <p>
              SOCIIETY isn’t just a brand. It’s a sanctuary for self-expression, powered by rare fashion, curated connection, and intentional community.
            </p>
          </div>

          <div className="bg-yellow-100 text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-center">Why You Should Join</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Monthly airdrops of luxury capsule pieces</li>
              <li>Verified access to rare fashion drops</li>
              <li>Invites to private SOCIIETY events</li>
              <li>True expression. Real connection. Limited entry.</li>
              <li>You don’t apply to join. You pledge to be seen.</li>
            </ul>
          </div>
        </div>

        <p className="italic text-yellow-300 text-lg mb-8">
          “This isn’t for everyone. But it might be for you.”
        </p>

        <Link href="/pledge">
          <a className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-10 rounded text-xl shadow-xl transition-all duration-300">
            Join the SOCIIETY
          </a>
        </Link>
      </div>
    </div>
  )
}

