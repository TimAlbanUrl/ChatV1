<script setup>
const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behaviour: 'smooth' })
    console.log('aaaaa')
}
</script>
<template>
<div class="fixed m-6 right-0 bottom-0">
    <button @click="scrollToTop" class="p-2 mt-4 bg-blue-500 rounded-full text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
        </svg>
    </button>
</div>
</template>