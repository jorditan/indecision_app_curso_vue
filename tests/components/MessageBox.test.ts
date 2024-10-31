import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

const wrapper = mount(MessageBox);

describe('<MessageBox/>', () => {
  test('Rendeser input and button elements correctly', () => {
    expect(wrapper.html).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('Emits sendMessage event when the button is clicked with message value', async () => {
    const message = 'Hola mundo';
    await wrapper.find('input[type=text]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('Emits sendMessage event when keypress is triggered', async () => {
    const message = 'Hola mundo';
    const input = wrapper.find('input');

    await input.setValue(message);
    await wrapper.find('input[type=text]').setValue(message);
    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('Emits sendMessage event when keypress is triggered is clicked with message value', async () => {
    const wrapper = mount(MessageBox);
    const input = wrapper.find('input');

    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
