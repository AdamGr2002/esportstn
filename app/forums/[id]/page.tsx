/* eslint-disable @typescript-eslint/no-unused-vars */

import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CommentSection from "@/app/components/CommentSection"
import TopicsList from "./TopicsList"


interface ForumPageProps {
  params: Promise<{ id: string }> | { id: string }
}

export const metadata: Metadata = {
  title: "Forum | EsportsTN",
  description: "Join the discussion in the Tunisian esports community",
}

export default async function ForumPage({ params }: ForumPageProps) {
  const resolvedParams = await params
  const forumId = resolvedParams.id

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{forumId.toUpperCase()} Forum</h1>
          <p className="text-gray-600">Join the discussion with other players</p>
        </div>
        <Button asChild>
          <Link href={`/forums/${forumId}/new`}>Create New Topic</Link>
        </Button>
      </div>

      <div className="grid gap-4">
        <TopicsList forumId={forumId} />
      </div>
    </div>
  )
} 