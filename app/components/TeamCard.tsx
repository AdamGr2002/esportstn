import Image from "next/image"

interface Team {
  id: number
  name: string
  logo: string
  game: string
  ranking: number
  description: string
}

interface TeamCardProps {
  team: Team
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="p-4 flex items-center">
        <Image
          src={team.logo || "/placeholder.svg"}
          alt={`${team.name} logo`}
          width={64}
          height={64}
          className="rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{team.name}</h2>
          <p className="text-sm text-gray-600">{team.game}</p>
        </div>
      </div>
      <div className="p-4 bg-gray-50">
        <p className="text-sm mb-2">Ranking: #{team.ranking}</p>
        <p className="text-sm text-gray-700">{team.description}</p>
      </div>
    </div>
  )
}

