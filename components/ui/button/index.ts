import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'cursor-pointer ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-b from-blue-600 to-blue-700 text-primary-foreground hover:from-blue-700 hover:to-blue-700',
        destructive: 'bg-gradient-to-b from-amber-600 to-amber-700 text-destructive-foreground hover:from-amber-700 hover:to-amber-700',
        outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
        secondary: 'bg-white text-black hover:bg-neutral-100 border border-border',
        ghost: 'border-transparent shadow-none hover:bg-accent hover:text-muted-foreground',
        muted: 'bg-neutral-200 text-neutral-600 hover:bg-neutral-200/80',
        teritrary: 'bg-blue-100 text-blue-600 border-transparent hover:bg-blue-200 shadow-none',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        xs: 'h-7 rounded-md px-2 text-xs',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
