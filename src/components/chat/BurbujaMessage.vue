<template>
  <div v-if="$props.itsMine" class="flex justify-end">
    <div data-testid="message" class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">
        {{ message }}
      </span>
    </div>
  </div>

  <div v-else class="flex">
    <div data-testid="response" class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize">
        {{ message }}
      </span>
      <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  itsMine: boolean;
  image?: string;
}
defineProps<Props>();
// Habilito las propertys en el componente
</script>
