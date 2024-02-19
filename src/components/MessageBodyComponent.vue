<script setup>
import {computed} from 'vue';

const props = defineProps({
    message: {
        type: Object,
        required: false
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

const emit = defineEmits(['delete'])
</script>

<template>

</template>