import { ref, computed } from 'vue';
//const counter = ref(10);
// De esta forma es un estado GLOBAL
export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue);
  return {
    counter,
    squareCounter: computed(() => counter.value * counter.value),
  };
};

// Si devuelve un arreglo siempre debe ser as const
// Sirve para separar la lógica del componente
