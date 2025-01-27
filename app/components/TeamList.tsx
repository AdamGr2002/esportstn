"use client"

import { useState } from "react"
import TeamCard from "./TeamCard"
import { Select } from "@/components/ui/select"

const teams = [
  {
    id: 1,
    name: "Carthage Eagles",
    logo: "/placeholder.svg?height=128&width=128&text=CE",
    game: "League of Legends",
    ranking: 1,
    description: "Top-ranked LoL team in Tunisia",
  },
  {
    id: 2,
    name: "Tunis Titans",
    logo: "/placeholder.svg?height=128&width=128&text=TT",
    game: "Counter-Strike: Global Offensive",
    ranking: 2,
    description: "Rising stars in the CS:GO scene",
  },
  {
    id: 3,
    name: "Sahara Storm",
    logo: "/placeholder.svg?height=128&width=128&text=SS",
    game: "Dota 2",
    ranking: 3,
    description: "Veteran Dota 2 squad with international experience",
  },
  {
    id: 4,
    name: "Medina Masters",
    logo: "/placeholder.svg?height=128&width=128&text=MM",
    game: "Rocket League",
    ranking: 1,
    description: "Reigning Rocket League champions",
  },
  {
    id: 5,
    name: "Coastal Crusaders",
    logo: "/placeholder.svg?height=128&width=128&text=CC",
    game: "Fortnite",
    ranking: 2,
    description: "Top Fortnite team known for aggressive playstyle",
  },
  {
    id: 6,
    name: "Oasis Outlaws",
    logo: "/placeholder.svg?height=128&width=128&text=OO",
    game: "Valorant",
    ranking: 3,
    description: "Up-and-coming Valorant team with high potential",
  },
]

const games = [
  "All",
  "League of Legends",
  "Counter-Strike: Global Offensive",
  "FIFA",
  "Fortnite",
  "Valorant",
]

export default function TeamList() {
  const [selectedGame, setSelectedGame] = useState("All")
  const [sortBy, setSortBy] = useState("name")

  const filteredAndSortedTeams = teams
    .filter((team) => selectedGame === "All" || team.game === selectedGame)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "ranking") return a.ranking - b.ranking
      return 0
    })

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between mb-6">
        <Select
          label="Filter by Game"
          options={games}
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
        />
        <Select
          label="Sort by"
          options={[
            { value: "name", label: "Name" },
            { value: "ranking", label: "Ranking" },
          ]}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedTeams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  )
}

