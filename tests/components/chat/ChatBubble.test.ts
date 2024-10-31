import { mount } from '@vue/test-utils';
import BurbujaMessage from '@/components/chat/BurbujaMessage.vue';

describe('<BurbujaMessage />', () => {
  test('Renders own message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(BurbujaMessage, {
      props: { message, itsMine: true },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);

    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
  });
});
