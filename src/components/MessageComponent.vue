<script setup>
import {computed} from 'vue';

const props = defineProps({
    message: {
        type: Object,
        required: true
    }
});

const formatDate = (date) => {
    let formattedDay = date.toLocaleDateString();
    let formattedTime = date.toLocaleTimeString('default', {hour: '2-digit', minute: '2-digit'});
    return `${formattedDay} ${formattedTime} `;
}

const formatedDate = computed(() => {
    const date = props.message.date;
    return formatDate(date);
});
</script>

<template>
    <div class="p-1 flex">
        <img :src="message.user.avatarUrl" alt="users_avatar" class="rounded-full h-14 w-14">
        <div class="flex">
            <p class="pl-2 font-bold m-1">{{ message.user.username }}</p>
            <p class="text-white text-opacity-50 m-1">{{ formatedDate }}</p>
            {{ message.text }}
        </div>
    </div>
</template>