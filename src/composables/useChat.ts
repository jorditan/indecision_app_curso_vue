import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yess-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const url = 'https://yesno.wtf/api';
  const messages = ref<ChatMessage[]>([]);

  const getHerResponde = async () => {
    const resp = await fetch(url);
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length == 0) {
      return;
    }

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    if (text.endsWith('?')) {
      const { answer, image } = await getHerResponde();
      messages.value.push({
        id: new Date().getTime(),
        itsMine: false,
        message: answer,
        image: image,
      });
    }
  };

  return { messages, onMessage };
};
