<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- Example Message -->
      <BurbujaMessage v-for="message in messages" :key="message.id" v-bind="message" />
      <!-- :keys="message.id"
        :its-mine="message.itsMine"
        :message="message.message"
        :image="message.image" -->

      <!-- Cuando no pongo el v-bind manda un string -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import BurbujaMessage from './BurbujaMessage.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watch(props, () => {
  console.log('se disparó el update de messages');
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});
</script>
