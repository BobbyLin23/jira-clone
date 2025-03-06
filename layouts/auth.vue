<script lang="ts" setup>
const route = useRoute()

const buttonText = computed(() => route.path === '/sign-in' ? 'Sign In' : 'Sign Up')
const buttonHref = computed(() => route.path === '/sign-in' ? '/sign-up' : '/sign-in')
</script>

<template>
  <main class="bg-neutral-100 min-h-screen">
    <div class="mx-auto max-w-screen-2xl p-4">
      <nav class="flex justify-between items-center">
        <NuxtImg src="/logo.svg" alt="Logo" height="36" width="152" />
        <NuxtLink :to="buttonHref">
          <Button variant="secondary">
            {{ buttonText }}
          </Button>
        </NuxtLink>
      </nav>
      <div class="flex flex-col items-center justify-center pt-4 md:pt-14">
        <slot />
      </div>
    </div>
  </main>
</template>
