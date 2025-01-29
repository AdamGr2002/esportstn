"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"

export default function NewForumTopic() {
  const router = useRouter()
  const { user, isSignedIn } = useUser()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("general")
  
  const createTopic = useMutation(api.forums.create)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isSignedIn) return

    try {
      await createTopic({
        title,
        content,
        category,
        authorId: user.id,
        authorName: user.fullName || "Anonymous",
        authorImage: user.imageUrl
      })
      
      router.push("/forums")
    } catch (error) {
      console.error("Error creating topic:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Create New Topic</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="general">General Discussion</option>
                <option value="lol">League of Legends</option>
                <option value="csgo">CS:GO</option>
                <option value="valorant">Valorant</option>
                <option value="fifa">FIFA</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[200px]"
                required
              />
            </div>
            
            <Button type="submit" disabled={!isSignedIn || !title || !content}>
              Create Topic
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 