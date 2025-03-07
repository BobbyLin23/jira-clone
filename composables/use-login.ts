import { useMutation } from '@tanstack/vue-query'

export function useUseLogin() {
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: async () => {
      const res = useFetch('/api/auth/login', {
        body: {

        },
      })

      return res
    },
  })

  return mutation
}
