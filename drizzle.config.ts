import { env } from "@/env.js"
import { type Config } from "drizzle-kit"

export default {
  schema: "./db/schema/index.ts",
  dialect: "postgresql",
  out: "./db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config
