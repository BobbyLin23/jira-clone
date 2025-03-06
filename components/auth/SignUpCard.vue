<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8).max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>

<template>
  <Card class="size-full md:w-[487px] border-none shadow-none">
    <CardHeader class="flex items-center justify-center text-center p-7">
      <CardTitle class="text-2xl">
        Sign Up
      </CardTitle>
      <CardDescription>
        By signing up, you agree to our
        <a href="/terms">
          <span class="text-blue-700">Terms of Service</span>
        </a>
        and
        <a href="/privacy">
          <span class="text-blue-700">Privacy Policy</span>
        </a>
      </CardDescription>
    </CardHeader>
    <div class="px-7 mb-2">
      <DottedSeparator />
    </div>
    <CardContent class="p-7">
      <form class="space-y-4" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="example@mail.com" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="*******" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button :disabled="false" size="lg" type="submit" class="w-full">
          Login
        </Button>
      </form>
    </CardContent>
    <div class="px-7">
      <DottedSeparator />
    </div>
    <CardContent class="flex p-7 flex-col gap-y-4">
      <Button :disabled="false" size="lg" variant="secondary" class="w-full">
        <Icon name="devicon:google" class="size-5 mr-2" />
        Login with Google
      </Button>
      <Button :disabled="false" size="lg" variant="secondary" class="w-full">
        <Icon name="devicon:github" class="size-5 mr-2" />
        Login with Github
      </Button>
    </CardContent>
    <div class="px-7">
      <DottedSeparator />
    </div>
    <CardContent class="flex p-7 items-center justify-center">
      <p>
        Already have an account?
        <NuxtLink href="/sign-in" class="text-blue-700">
          &nbsp;Sign in
        </NuxtLink>
      </p>
    </CardContent>
  </Card>
</template>
