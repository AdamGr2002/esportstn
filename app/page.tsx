import Link from "next/link"
import Image from "next/image"
import TeamAvatar from "./components/TeamAvatar"

const teams = [
  { name: "Carthage Eagles", logo: "/placeholder.svg?height=64&width=64&text=CE" },
  { name: "Tunis Titans", logo: "/placeholder.svg?height=64&width=64&text=TT" },
  { name: "Sahara Storm", logo: "/placeholder.svg?height=64&width=64&text=SS" },
  { name: "Medina Masters", logo: "/placeholder.svg?height=64&width=64&text=MM" },
  { name: "Coastal Crusaders", logo: "/placeholder.svg?height=64&width=64&text=CC" },
  { name: "Oasis Outlaws", logo: "/placeholder.svg?height=64&width=64&text=OO" },
]

const news = [
  {
    id: 1,
    title: "Tunisian Team Qualifies for International LoL Tournament",
    excerpt: "Carthage Eagles secure a spot in the upcoming League of Legends World Championship.",
    date: "2023-07-15",
    image: "/placeholder.svg?height=200&width=400&text=LoL+News",
  },
  {
    id: 2,
    title: "New Esports Arena Opens in Tunis",
    excerpt: "State-of-the-art facility aims to boost the local gaming scene and attract international events.",
    date: "2023-07-10",
    image: "/placeholder.svg?height=200&width=400&text=Arena+Opening",
  },
  {
    id: 3,
    title: "Tunisian Government Recognizes Esports as Official Sport",
    excerpt: "New legislation paves the way for increased support and funding for esports in Tunisia.",
    date: "2023-07-05",
    image: "/placeholder.svg?height=200&width=400&text=Esports+Recognition",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to تونس Esports</h1>
        <p className="text-xl mb-8">Connect, compete, and conquer with Tunisian gamers!</p>
        <Link href="/tournaments" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Explore Tournaments
        </Link>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Latest Esports News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((article) => (
            <div key={article.id} className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Link href={`/news/${article.id}`} className="text-blue-500 hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/news" className="text-blue-500 hover:underline">
            View All News
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Tournaments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={`/placeholder.svg?height=200&width=400&text=Tournament ${i}`}
                alt={`Tournament ${i}`}
                width={400}
                height={200}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="font-bold mb-2">Tunisian Cup {i}</h3>
                <p className="text-sm text-gray-600 mb-4">Join the biggest Tunisian esports event of the year!</p>
                <Link href="#" className="text-blue-500 hover:underline">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Top Tunisian Esports Teams</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {teams.map((team) => (
            <TeamAvatar key={team.name} name={team.name} logo={team.logo} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/teams" className="text-blue-500 hover:underline">
            View All Teams
          </Link>
        </div>
      </section>
    </main>
  )
}

