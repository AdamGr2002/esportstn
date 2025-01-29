import Link from "next/link"
import SearchBar from "./SearchBar"
import { AnimatedTabsHover } from "./AnimatedTabsHover"
import Image from "next/image"
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-red-600 hover:text-red-500 flex items-center">
          <Image src="/esplogo.webp" alt="EsportsTN" width={50} height={50} />
          <span className="ml-2">EsportsTN</span>
        </Link>
        
        <div className="w-full md:w-1/3 mx-4">
          <SearchBar />
        </div>
        
        <div className="flex items-center gap-4">
          <AnimatedTabsHover />
          <SignedIn>
            <UserButton showName />
          </SignedIn>
          <SignedOut>
            <div className="bg-red-600 rounded-md p-2">
              <SignInButton mode="modal" />
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  )
}