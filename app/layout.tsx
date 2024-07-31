import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"

import { siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["nextjs", "react", "saas", "marketing"],
  authors: [
    {
      name: "ocesarsilva",
      url: "https://www.cesarslv.com",
    },
  ],
  creator: "ocesarsilva",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="pt_BR" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
