"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

export default function TopicsList({ forumId }: { forumId: string }) {
  const topics = useQuery(api.forums.listByCategory, { category: forumId }) || []

  return (
    <>
      {topics.map((topic) => (
        <Card key={topic._id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <Image
                  src={topic.authorImage || "/placeholder.svg"}
                  alt={topic.authorName}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <Link 
                    href={`/forums/${forumId}/topics/${topic._id}`}
                    className="text-xl font-semibold hover:text-blue-600"
                  >
                    {topic.title}
                  </Link>
                  <div className="text-sm text-gray-500 mt-1">
                    Posted by {topic.authorName} • {new Date(topic._creationTime).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {topic.replyCount || 0} replies
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
} 