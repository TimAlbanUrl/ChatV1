<script setup>
import { supabase } from '@/supabase'
import { useUserStore } from '@/stores/user'
import NavbarComponent from '@/components/NavbarComponent.vue'

supabase.auth.onAuthStateChange((_, session) => {
  useUserStore().fetchUserProfile(session?.user?.id)
})
</script>

<template>
  <NavbarComponent></NavbarComponent>
  <div class="bg-gray-900 text-white flex flex-row" style="width: 100%; height: 100%;">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
