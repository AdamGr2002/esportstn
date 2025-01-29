/* eslint-disable @typescript-eslint/no-unused-vars */
export interface NewsItem {
    id: number
    title: string
    excerpt: string
    date: string
    image: string
    content: string
    category: string
  }
  
  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "Tunisian Team Qualifies for International LoL Tournament",
      excerpt: "Carthage Eagles secure a spot in the upcoming League of Legends World Championship.",
      date: "2023-07-15",
      image: "/placeholder.svg?height=400&width=800&text=LoL+News",
      content: `In a thrilling series of matches, Tunisia's top League of Legends team, Carthage Eagles, has secured a spot in the upcoming World Championship. This marks a historic moment for Tunisian esports, as it's the first time a team from the country has qualified for this prestigious event.
  
      The Carthage Eagles showed exceptional skill and teamwork throughout the qualifier matches, defeating several strong opponents from the MENA region. Their victory not only puts Tunisia on the global esports map but also inspires a new generation of gamers in the country.
  
      Team captain, Amir Benhassine, expressed his excitement: "This is a dream come true for us. We've worked so hard for this opportunity, and we're proud to represent Tunisia on the world stage. We're going to give it our all at the World Championship."
  
      The League of Legends World Championship is set to take place later this year, featuring the best teams from around the globe. With this qualification, the Carthage Eagles have not only made their mark in Tunisian esports history but have also opened up new possibilities for sponsorships and support for the local gaming scene.
  
      As the team prepares for the international competition, the entire Tunisian esports community rallies behind them, eager to see how they'll perform against the world's elite teams.`,
      category: "Tournaments",
    },
    {
      id: 2,
      title: "New Esports Arena Opens in Tunis",
      excerpt: "State-of-the-art facility aims to boost the local gaming scene and attract international events.",
      date: "2023-07-10",
      image: "/placeholder.svg?height=400&width=800&text=Arena+Opening",
      content: `The Tunisian esports scene received a significant boost today with the grand opening of a state-of-the-art esports arena in the heart of Tunis. The facility, named "Digital Colosseum," is set to become the epicenter of competitive gaming in the country.
  
      Spanning over 2,000 square meters, the arena features high-end gaming setups, a main stage for tournaments, broadcast studios, and training rooms for professional teams. The venue is equipped with the latest technology, including high-refresh-rate monitors, powerful gaming PCs, and a blazing-fast internet connection to ensure the best possible gaming experience.
  
      Minister of Youth and Sports, Kamel Deguiche, who attended the opening ceremony, stated: "This arena represents our commitment to nurturing talent in the digital age. Esports is not just a pastime; it's a viable career path and a growing industry. We're proud to provide our youth with a world-class facility to hone their skills."
  
      The Digital Colosseum is expected to host both national and international tournaments across various game titles. Its first major event, the Tunisian Esports Cup, is scheduled for next month, featuring competitions in League of Legends, Counter-Strike: Global Offensive, and FIFA.
  
      Local esports organizations have expressed excitement about the new possibilities this arena brings. Nadia Bouazizi, manager of the Sahara Storm team, commented: "Having access to such a professional setup will significantly improve our training regimen. It's a game-changer for Tunisian esports."
  
      The arena also aims to attract international events, potentially boosting esports tourism in Tunisia. With this new facility, Tunisia is positioning itself as a key player in the growing MENA region esports scene.`,
      category: "Industry",
    },
    {
      id: 3,
      title: "Tunisian Government Recognizes Esports as Official Sport",
      excerpt: "New legislation paves the way for increased support and funding for esports in Tunisia.",
      date: "2023-07-05",
      image: "/placeholder.svg?height=400&width=800&text=Esports+Recognition",
      content: `In a landmark decision, the Tunisian government has officially recognized esports as a legitimate sport, paving the way for increased support, funding, and development of the competitive gaming scene in the country.
  
      The new legislation, passed by the Tunisian Parliament, acknowledges the growing popularity and economic potential of esports. It establishes a regulatory framework for esports competitions, player contracts, and team organizations.
  
      Key points of the new law include:
  
      1. The creation of a National Esports Federation to oversee and promote competitive gaming in Tunisia.
      2. Recognition of professional esports players as athletes, granting them similar benefits and protections.
      3. Allocation of government funding for esports infrastructure, training programs, and international competition participation.
      4. Integration of esports education programs in schools and universities.
      5. Tax incentives for companies investing in the Tunisian esports industry.
  
      Esports enthusiasts and industry professionals have welcomed this decision. Yassine Ismail, a prominent Tunisian esports commentator, said: "This is a huge step forward for our community. Official recognition will bring more opportunities, better infrastructure, and increased investor interest in Tunisian esports."
  
      The move is expected to boost Tunisia's position in the global esports market, potentially attracting international tournaments and fostering local talent. It also opens up new career opportunities for young Tunisians in fields such as game development, event management, and esports marketing.
  
      Educational institutions are also gearing up to introduce esports-related courses. The University of Tunis has announced plans to launch a degree program in Esports Management starting next academic year.
  
      As Tunisia embraces esports as an official sport, it joins a growing list of countries recognizing the legitimacy and potential of competitive gaming. This decision is set to usher in a new era for Tunisian esports, with exciting developments on the horizon.`,
      category: "Policy",
    },
  ]
  
  export async function getAllNews(): Promise<NewsItem[]> {
    // In a real application, this would fetch data from an API or database
    return newsData
  }
  
  export async function getNewsById(id: number): Promise<NewsItem | undefined> {
    // In a real application, this would fetch a specific news item from an API or database
    return newsData.find((news) => news.id === id)
  }
  
  export function getCategories(): string[] {
    const categories = new Set(newsData.map((news) => news.category))
    return Array.from(categories)
  }
  
  export async function getTeamById(id: string) {
    // Replace with your actual API call or database query
    return {
      name: "Team Name",
      logo: "/team-placeholder.svg",
      founded: "2020",
      location: "Tunisia",
      description: "Team description...",
      players: [],
      achievements: [],
      stats: {
        totalWins: 0,
        totalPrize: 0,
        currentRank: 1,
        winRate: 0
      }
    }
  }
  
  