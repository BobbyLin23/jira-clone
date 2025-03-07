import type { z } from 'zod'
import type { loginSchema, registerSchema } from '~/schemas'

export type LoginDTO = z.infer<typeof loginSchema>
export type RegisterDTO = z.infer<typeof registerSchema>
