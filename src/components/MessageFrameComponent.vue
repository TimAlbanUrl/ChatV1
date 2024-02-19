<script setup>
import MessageBodyComponent from '@/components/MessageBodyComponent.vue';

const props = defineProps({
    message: {
        type: Object,
        required: false
    }
});

const deleteMessage = (id) => {
    emit('delete', message.id)
}

const emit = defineEmits(['delete'])
</script>

<template>
    <div v-if="message.super" class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-lg shadow-2xl w-auto h-auto">
        <MessageBodyComponent @delete="deleteMessage" :message="message"></MessageBody>
    </div>
    <div v-else>
        <MessageBodyComponent @delete="deleteMessage" :message="message"></MessageBody>
    </div>
</template>