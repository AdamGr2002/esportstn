/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image"
import { notFound } from "next/navigation"
import { getTeamById } from "@/lib/api"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Info, BarChart3 } from "lucide-react"
import CommentSection from "@/app/components/CommentSection"


interface Player {
  id: string
  name: string
  role: string
  image: string
  socialMedia: {
    twitter?: string
    twitch?: string
  }
}

interface Achievement {
  id: string
  title: string
  date: string
  placement: string
  prize?: string
}

interface TeamStats {
  totalWins: number
  totalPrize: number
  currentRank: number
  winRate: number
}

interface TeamPageProps {
  params: Promise<{ id: string }> | { id: string }
}

export default async function TeamPage({ params }: TeamPageProps) {
  const resolvedParams = await params
  const team = await getTeamById(resolvedParams.id)

  if (!team) notFound()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Team Header */}
      <div className="flex items-center gap-6 mb-8">
        <Image
          src={team.logo || "/team-placeholder.svg"}
          alt={team.name}
          width={120}
          height={120}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
          <div className="flex gap-4 text-gray-600">
            <span>Founded: {team.founded}</span>
            <span>•</span>
            <span>Location: {team.location}</span>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="roster" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 gap-4">
          <TabsTrigger value="roster" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Roster
          </TabsTrigger>
          <TabsTrigger value="about" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            About
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            Achievements
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Statistics
          </TabsTrigger>
        </TabsList>

        {/* Roster Tab */}
        <TabsContent value="roster">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.players.map((player: Player) => (
              <Card key={player.id}>
                <CardContent className="flex items-center gap-4 p-4">
                  <Image
                    src={player.image || "/player-placeholder.svg"}
                    alt={player.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{player.name}</h3>
                    <p className="text-gray-600">{player.role}</p>
                    <div className="flex gap-2 mt-2">
                      {player.socialMedia.twitter && (
                        <a href={player.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                          Twitter
                        </a>
                      )}
                      {player.socialMedia.twitch && (
                        <a href={player.socialMedia.twitch} target="_blank" rel="noopener noreferrer" className="text-purple-500">
                          Twitch
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* About Tab */}
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About {team.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {team.description.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements">
          <div className="space-y-4">
            {team.achievements.map((achievement: Achievement) => (
              <Card key={achievement.id}>
                <CardContent className="flex justify-between items-center p-4">
                  <div>
                    <h3 className="font-bold text-lg">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{achievement.placement}</p>
                    {achievement.prize && (
                      <p className="text-green-600">{achievement.prize}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Statistics Tab */}
        <TabsContent value="stats">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <p className="text-gray-600">Total Wins</p>
                <h3 className="text-2xl font-bold">{team.stats.totalWins}</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-gray-600">Total Prize Money</p>
                <h3 className="text-2xl font-bold">${team.stats.totalPrize.toLocaleString()}</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-gray-600">Current Rank</p>
                <h3 className="text-2xl font-bold">#{team.stats.currentRank}</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="text-gray-600">Win Rate</p>
                <h3 className="text-2xl font-bold">{team.stats.winRate}%</h3>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Comments Section */}
      <div className="mt-8">
        <CommentSection 
          postId={resolvedParams.id} 
          postType="team" 
        />
      </div>
    </div>
  )
} 