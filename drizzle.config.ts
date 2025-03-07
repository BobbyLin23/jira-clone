import process from 'node:process'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './schemas/db/*',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
