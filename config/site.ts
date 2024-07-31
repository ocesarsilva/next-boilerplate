import { env } from "@/env"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Acme",
  description: "",
  url:
    env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://acme.com",
  links: { github: "https://github.com/ocesarsilva/next-boilerplate" },
}
