<template>
  <section>
    <h3 data-testid="counterLabel">Counter: {{ counter }}</h3>
    <h3 data-testid="squareLabel">Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button data-testid="decrement" class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number;
}

const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);

//import { ref, computed } from 'vue';

// interface Props {
//   value: number;
// } // De esta forma el valor es obligatorio

// const props = defineProps<Props>();

// //const counter = ref(props.value ?? 10);
// //const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
.btn {
  @apply p-2 m-2 bg-sky-200 rounded-sm;
}
</style>

<!-- El código de setup y composition API es recomendado cuando es CORTO. Si queremos separarlo debemos usar el composoable functions, similar a los custom hooks de React -->
