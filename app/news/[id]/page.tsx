import Image from "next/image"
import { getNewsById } from "@/lib/api"
import { notFound } from "next/navigation"
import SocialShare from "../../components/SocialShare"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const news = await getNewsById(Number.parseInt(params.id))
  if (!news) return { title: "News Article Not Found" }
  return { title: `${news.title} | تونس Esports` }
}

export default async function NewsArticle({ params }: { params: { id: string } }) {
  const news = await getNewsById(Number.parseInt(params.id))

  if (!news) notFound()

  const articleUrl = `https://your-domain.com/news/${params.id}`

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">
          Published on {news.date} | Category: {news.category}
        </div>
        <SocialShare url={articleUrl} title={news.title} />
      </div>
      <Image
        src={news.image || "/placeholder.svg"}
        alt={news.title}
        width={800}
        height={400}
        className="w-full object-cover h-64 md:h-96 rounded-lg mb-6"
      />
      <div className="prose max-w-none">
        {news.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}

