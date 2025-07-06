import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen text-white flex items-center justify-center px-6 py-16 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/sociiety-bg.jpg"
          alt="SOCIIETY fashion background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-xl mb-6">
          Welcome to SOCIETY
        </h1>
        <p className="text-lg md:text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
          A private ecosystem of culture, creativity, and connection — born from solo journeys, built for a collective legacy.
        </p>

        <div className="space-y-6 text-yellow-100 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Mission</h2>
            <p>
              At SOCIETY, we believe in the power of connection and community. More than just a brand—it’s an elite cultural family built on experience and earned access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">Vision</h2>
            <p>
              To become the world’s most exclusive creative sanctuary — a fashion-first, privacy-driven network for high-tier collaboration and cultural impact.
            </p>
          </div>

          <div className="bg-yellow-100 text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-center">Why You Should Join</h3>
            <ul className="list-disc text-left pl-6 space-y-2">
              <li>Monthly airdrops of rare fashion pieces and digital exclusives</li>
              <li>Priority access to limited capsule collections</li>
              <li>Private invites to elite SOCIIETY events</li>
              <li>Real rewards for loyalty — the system watches and gives back</li>
            </ul>
          </div>
        </div>

        <p className="italic text-yellow-300 text-lg mb-8">
          “Access isn’t given. It’s earned. Start your journey today.”
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
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/pledge')
  }, [router])
  return null
}
