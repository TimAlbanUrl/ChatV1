<script setup>
import {ref} from 'vue';
import MessageComponent from '@/components/MessageComponent.vue';

const messageText = ref('');

const messageList = ref([]);

const addMessage = () => {
    messageList.value.push({
        id: Math.random().toString(32).slice(2),
        text: messageText.value,
        date: new Date(),
        user: {
            username: "User",
            avatarUrl: "https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg",
        }
    });
    messageText.value = ""
    messageText.value.focus()
};

const deleteMessage = (id) => {
    console.log(id)
    messageList.value = messageList.value.filter((message) => message.id !== id)
}
</script>

<template>
    <ul class="list-none p-4">
        <li>
            <textarea 
            @keyup.enter.exact="addMessage"
            v-model="messageText" class="text-black rounded-md ml-3" name="message" id="message" cols="30" rows="1"></textarea>
            <button @click="addMessage" class="p-2 bg-blue-500 rounded-full ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
        </li>

        <ul v-for="(message, index) in messageList" :key="index">
            <li class="p-3">
                <MessageComponent @delete="deleteMessage" :message="message"></MessageComponent>
            </li>
        </ul>
    </ul>
</template>