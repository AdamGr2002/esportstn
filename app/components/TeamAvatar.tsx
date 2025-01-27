import Image from "next/image"

interface TeamAvatarProps {
  name: string
  logo: string
}

export default function TeamAvatar({ name, logo }: TeamAvatarProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={logo || "/placeholder.svg"}
        alt={`${name} logo`}
        width={64}
        height={64}
        className="rounded-full border-2 border-gray-200"
      />
      <span className="mt-2 text-sm font-medium text-gray-700">{name}</span>
    </div>
  )
}

