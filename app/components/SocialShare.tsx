"use client"

import { Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialShareProps {
  url: string
  title: string
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, "_blank")
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, "_blank")
  }

  return (
    <div className="flex space-x-2">
      <Button onClick={shareOnFacebook} variant="outline" size="icon">
        <Facebook className="h-4 w-4" />
      </Button>
      <Button onClick={shareOnTwitter} variant="outline" size="icon">
        <Twitter className="h-4 w-4" />
      </Button>
      <Button onClick={shareOnLinkedIn} variant="outline" size="icon">
        <Linkedin className="h-4 w-4" />
      </Button>
    </div>
  )
}

