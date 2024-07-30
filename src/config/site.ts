import { env } from "@/env"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Convexte",
  description: "Gerencie seus leads de maneira mais rápida e inteligente.",
  url:
    env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://app.convexte.com",
  links: { github: "https://github.com/ocesarsilva/convexte" },
}
