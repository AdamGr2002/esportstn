"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { NewsItem } from "@/lib/api"

interface NewsListProps {
  initialNews: NewsItem[]
  categories: string[]
}

const ITEMS_PER_PAGE = 6

export default function NewsList({ initialNews, categories }: NewsListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNews =
    selectedCategory === "All" ? initialNews : initialNews.filter((news) => news.category === selectedCategory)

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
  const currentNews = filteredNews.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Filter by Category:</h2>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => {
              setSelectedCategory("All")
              setCurrentPage(1)
            }}
            variant={selectedCategory === "All" ? "default" : "outline"}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentPage(1)
              }}
              variant={selectedCategory === category ? "default" : "outline"}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentNews.map((article) => (
          <div key={article.id} className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={400}
              height={200}
              className="w-full object-cover h-48"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{article.title}</h2>
              <p className="text-gray-700 text-base mb-4">{article.excerpt}</p>
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
      <div className="flex justify-center space-x-2">
        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </Button>
        <span className="py-2 px-4 bg-gray-200 rounded">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

