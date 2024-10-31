import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';
import { wrap } from 'module';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola', itsMine: true },
  { id: 2, message: 'Mundo', itsMine: false },
];

const wrapper = mount(ChatMessages, {
  props: { messages: messages },
});

describe('<ChatMessages />', () => {
  test('renders chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'BurbujaMessage' });

    expect(chatBubbles.length).toBe(messages.length);
  });

  test('scrolls down to the bottom after messages update', async () => {
    const scrollToMock = vi.fn();

    const chatRef = wrapper.vm.$refs.chatRef as HtmlDivElement;

    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [
        ...messages,
        {
          id: 3,
          message: 'Hey',
          itsMine: true,
        },
      ],
    });

    await new Promise((r) => setTimeout(r, 150));

    expect(scrollToMock).toHaveBeenCalled();
  });
});
