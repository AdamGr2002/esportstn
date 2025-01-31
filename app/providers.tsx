"use client"

import { ClerkProvider,useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk} from "convex/react-clerk"
import { ConvexReactClient } from "convex/react"
import { neobrutalism } from '@clerk/themes'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{baseTheme: neobrutalism}}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
} 