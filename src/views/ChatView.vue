<script setup>
import {onMounted, ref} from 'vue';
import MessageComponent from '@/components/MessageComponent.vue';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
import { messageList, insertMessage, fetchMessages, subscribeToMessage, deleteMessage } from '@/api/messages'

const messageText = ref('');
const { user } = storeToRefs(useUserStore())
const messageContainer = ref(null)

const addMessage = async () => {
    await insertMessage(messageText.value, user.value.id)

    messageText.value = ''
};

subscribeToMessage()

onMounted(async () => {
    await fetchMessages()
})

const handleDeleteMessage = async (id) => {
    await deleteMessage(id, user.value.id)
}
</script>

<template>
    <ul class="list-none p-4">
        <li class="ml-1 flex justify-center w-message-box" ref="messageContainer">
            <textarea 
            @keyup.enter.exact="addMessage"
            v-model="messageText" class="p-2 pl-1 text-white bg-gray-900 border-2 border-gray-900 border-b-gray-300 rounded-md ml-3 not-resizable-ta" name="message" id="message" cols="30" rows="1"></textarea>
            <button @click="addMessage" class="p-2 bg-blue-500 rounded-full ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
        </li>

        <ul v-for="(message, index) in messageList" :key="index">
            <li class="p-3">
                <MessageComponent @delete="handleDeleteMessage" :message="message"></MessageComponent>
            </li>
        </ul>
    </ul>
</template>