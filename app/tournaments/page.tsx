import Link from "next/link"

const tournaments = [
  {
    id: 1,
    name: "Tunisian League of Legends Championship",
    game: "League of Legends",
    date: "2023-08-15",
    prize: "$5000",
  },
  { id: 2, name: "CS:GO Carthage Cup", game: "Counter-Strike: Global Offensive", date: "2023-09-01", prize: "$3000" },
  { id: 3, name: "Rocket League Sahara Series", game: "Rocket League", date: "2023-09-20", prize: "$2000" },
  { id: 4, name: "Fortnite Tunis Royale", game: "Fortnite", date: "2023-10-05", prize: "$4000" },
]

export default function Tournaments() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Tournaments</h1>
      <div className="grid gap-4">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{tournament.name}</h2>
            <p className="text-gray-600 mb-2">Game: {tournament.game}</p>
            <p className="text-gray-600 mb-2">Date: {tournament.date}</p>
            <p className="text-gray-600 mb-4">Prize Pool: {tournament.prize}</p>
            <Link href={`/tournaments/${tournament.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

