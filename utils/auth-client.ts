import process from 'node:process'
import { createAuthClient } from 'better-auth/vue'

export const authClient = createAuthClient({
  baseURL: process.env.NUXT_PUBLIC_BASE_URL,
})
