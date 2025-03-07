export default defineNuxtRouteMiddleware(async (to) => {
  const { data: session } = await authClient.useSession(useFetch)

  if (!session.value) {
    if (to.path === '/') {
      return navigateTo('/sign-in')
    }
  }
})
