import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter>', () => {
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    //Snapshot es muy estricto
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('Renders the counter value correctly', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    const value = 5;

    // expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    // console.log(wrapper.html());

    // expect(wrapper.find('[data-testid="squareLabel"]').text()).toContain(
    //   `Square: ${value * value}`,
    // );
    // console.log(wrapper.html());

    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    expect(counterLabel.text()).toContain(`Counter: ${value}`);

    expect(squareLabel.text()).toContain(`Square: ${value * value}`);
  });

  test('Increments the counter when +1 buttons is clicked', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    const btnIncrement = wrapper.find('button');

    await btnIncrement.trigger('click');

    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);

    expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });

  test('Decremenets the counter when -1 button is clicked twice'),
    async () => {
      const value = 5;
      const wrapper = mount(MyCounter, {
        props: {
          value: value,
        },
      });

      const btnDecrement = wrapper.find('decrement');

      await btnDecrement.trigger('click');
      await btnDecrement.trigger('click');

      const [counterLabel, squareLabel] = wrapper.findAll('h3');
      expect(counterLabel.text()).toContain(`Counter: ${value - 2}`);

      expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
    };
});
