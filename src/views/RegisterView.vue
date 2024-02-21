<script setup>
import { ref } from 'vue'
import { supabase } from '../../supabase'
import { useRouter  } from 'vue-router'

const email = ref('')
const username = ref('')
const password = ref('')

const { push: routerPush } = useRouter();

const onSubmit = async () => {
    if(!email.value || !username.value || !password.value) return

    const {data, error} = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
            data: {
                username: username.value
            }
        }
    })
    if (error) alert(error.message)
    else {
        routerPush('/')
    }
    return data
}
</script>

<template>
    <div class="m-4 p-4 rounded-lg bg-gray-800 shadow-2xl h-fit">
      <form @submit.prevent="onSubmit" class="flex flex-col gap-2 p-4 mx-auto max-w-96">
        <div class="flex flex-col">
          <label for="email">Email</label>
          <textarea type="email" id="email" v-model="email" class="p-2 text-white bg-gray-800 border-2 border-gray-800 border-b-gray-300 rounded-md ml-3 not-resizable-ta" cols="30" rows="1" required></textarea>
        </div>
        <div class="flex flex-col">
          <label for="username">Username</label>
          <textarea type="text" id="username" v-model="username" class="p-2 text-white bg-gray-800 border-2 border-gray-800 border-b-gray-300 rounded-md ml-3 not-resizable-ta" cols="30" rows="1" required></textarea>
        </div>
        <div class="flex flex-col">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" class="p-2 text-white bg-gray-800 border-2 border-gray-800 border-b-gray-300 rounded-md ml-3 not-resizable-ta" required/>
        </div>
        <button type="submit" class="p-2 mt-4 bg-blue-500 rounded-full">Register</button>
      </form>
    </div>
  </template>