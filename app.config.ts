export default defineAppConfig({
  ui: {
    button: {
      variants: {
        color: {
          primary: 'bg-gradient-to-b from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-700',
          second: 'bg-white text-black hover:bg-neutral-100 border border-neutral-300',
          destructive: 'bg-gradient-to-b from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-700',
          muted: 'bg-neutral-200 text-neutral-600 hover:bg-neutral-200/80',
          teritrary: 'bg-blue-100 text-blue-600 border-transparent hover:bg-blue-200 shadow-none',
          outline: 'border-neutral-300 bg-neutral-100 hover:bg-neutral-200 hover:text-black/80 border',
          ghost: 'border-transparent shadow-none hover:bg-neutral-200 hover:text-black/80',
        },
      },
    },
  },
})
