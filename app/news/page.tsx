import NewsList from "../components/NewsList"
import { getAllNews, getCategories } from "@/lib/api"

export const metadata = {
  title: "Latest Esports News",
  description: "Stay updated with the latest news from the Tunisian esports scene.",
}

export default async function NewsPage() {
  const allNews = await getAllNews()
  const categories = getCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Esports News</h1>
      <NewsList initialNews={allNews} categories={categories} />
    </div>
  )
}

