import { pgTable, text, varchar } from "drizzle-orm/pg-core"

import { generateId } from "@/lib/id"

export const users = pgTable("users", {
  id: varchar("id", { length: 30 })
    .$defaultFn(() => generateId())
    .primaryKey(), // prefix_ + nanoid (12)
  name: text("name").notNull(),
})
