<script setup>
import {ref} from 'vue';
import MessageComponent from '@/components/MessageComponent.vue';

const messageText = ref('');

const messageList = ref([]);

const addMessage = () => {
    messageList.value.push({
        text: messageText.value,
        date: new Date(),
        user: {
            username: "User",
            avatarUrl: "https://sm.ign.com/ign_fr/cover/a/avatar-gen/avatar-generations_bssq.jpg",
        }
    });
    messageText.value = ""
};
</script>

<template>
    <div class="flex align-middle p-4">
        <div v-for="(message, index) in messageList" class="p-4" :key="index">
            <MessageComponent :message="message"></MessageComponent>
        </div>
        <textarea v-model="messageText" class="text-black rounded-md ml-3" name="message" id="message" cols="30" rows="1"></textarea>
        <button @click="addMessage" class="p-2 bg-blue-500 rounded-md ml-3">Envoyer</button>
    </div>
</template>