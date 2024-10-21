import { defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter';
// Es importante usar el define components en el caso de Typescript
export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, squareCounter } = useCounter(props.value);

    return {
      counter,
      squareCounter,
    };
  },
});
