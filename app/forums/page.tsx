import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Gaming Forums | EsportsTN",
  description: "Join discussions about your favorite games in the Tunisian esports community",
}

const forums = [
  {
    id: "lol",
    name: "League of Legends",
    description: "Discussions about LoL strategies, tournaments, and more",
    topics: 156,
    posts: 1234,
  },
  {
    id: "csgo",
    name: "CS:GO",
    description: "Counter-Strike: Global Offensive community discussions",
    topics: 89,
    posts: 567,
  },
  {
    id: "valorant",
    name: "Valorant",
    description: "Valorant tips, tricks, and tournament discussions",
    topics: 120,
    posts: 890,
  },
  {
    id: "fifa",
    name: "FIFA",
    description: "FIFA community hub for Tunisian players",
    topics: 45,
    posts: 234,
  },
]

export default function ForumsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gaming Forums</h1>
        <Button asChild>
          <Link href="/forums/new">Create New Topic</Link>
        </Button>
      </div>

      <div className="grid gap-4">
        {forums.map((forum) => (
          <div
            key={forum.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <Link href={`/forums/${forum.id}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{forum.name}</h2>
                  <p className="text-gray-600 mb-2">{forum.description}</p>
                  <div className="text-sm text-gray-500">
                    {forum.topics} topics · {forum.posts} posts
                  </div>
                </div>
                <Button variant="ghost">View Forum →</Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}