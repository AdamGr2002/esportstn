/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import CommentSection from "../components/CommentSection"

interface ForumPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ForumPageProps): Promise<Metadata> {
  // In a real app, fetch forum data based on params.id
  const forumName = params.id.toUpperCase()
  return {
    title: `${forumName} Forum | EsportsTN`,
    description: `Join the discussion about ${forumName} in the Tunisian esports community`,
  }
}

export default function ForumPage({ params }: ForumPageProps) {
  // In a real app, fetch forum topics based on params.id
  const topics = [
    {
      id: "1",
      title: "Weekly Tournament Discussion",
      author: "TunisianGamer",
      replies: 23,
      lastActivity: "2024-03-10T12:00:00Z",
    },
    // Add more topics...
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{params.id.toUpperCase()} Forum</h1>
        <Button asChild>
          <Link href={`/forums/${params.id}/new`}>New Topic</Link>
        </Button>
      </div>

      <div className="grid gap-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <Link href={`/forums/${params.id}/topics/${topic.id}`}>
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
                  <div className="text-sm text-gray-500">
                    By {topic.author} · {topic.replies} replies ·
                    Last active {new Date(topic.lastActivity).toLocaleDateString()}
                  </div>
                </div>
                <Button variant="ghost">View Topic →</Button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}