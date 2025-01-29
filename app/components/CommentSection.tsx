/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useMutation, useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

export interface PostComment {
  id: string
  content: string
  createdAt: number
  author: {
    name: string
    image: string
  }
}

interface CommentSectionProps {
  postId: string
  postType: "news" | "tournament" | "team"
}

export default function CommentSection({ postId, postType }: CommentSectionProps) {
  const { user, isSignedIn } = useUser()
  const [newComment, setNewComment] = useState("")
  
  const comments = useQuery(api.comments.list, { postId, postType }) || []
  const addComment = useMutation(api.comments.add)

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !isSignedIn || !user) return

    await addComment({
      content: newComment,
      postId,
      postType,
      authorId: user.id,
      authorName: user.fullName || "Anonymous",
      authorImage: user.imageUrl || "/placeholder.svg",
    })

    setNewComment("")
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      
      {isSignedIn ? (
        <form onSubmit={handleSubmitComment} className="mb-6">
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="mb-2"
          />
          <Button type="submit" disabled={!newComment.trim()}>
            Post Comment
          </Button>
        </form>
      ) : (
        <p className="mb-6 text-gray-600">
          Please sign in to comment.
        </p>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="border rounded-lg p-4">
            <div className="flex items-center mb-2">
              <Image
                src={comment.authorImage}
                alt={comment.authorName}
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <div>
                <p className="font-medium">{comment.authorName}</p>
                <p className="text-sm text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
