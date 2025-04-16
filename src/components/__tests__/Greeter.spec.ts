import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import GreetBtn from '@/components/GreetBtn.vue';

describe('GreetBtn', () => {
  // const wrapper = mount(GreetBtn);
  const msg = "Test message";

  // The component renders correctly.
  it('renders the correctly', () => {
    let wrapper = mount(GreetBtn);
    expect(wrapper.find('.greet-container').exists()).toBe(true);
  });

  // The button appears as expected.
  it('renders a button', () => {
    let wrapper = mount(GreetBtn);
    expect(wrapper.find('button').exists()).toBe(true);
  })

  // Clicking the button prints the expected message. 
  it('Clicking the button prints the expected message.', async () => {
    let wrapper = mount(GreetBtn);
    await wrapper.find('button').trigger('click');
    expect(wrapper.vm.output).toContain(wrapper.vm.message);
  });

  // The component correctly handles different messages passed via props.
  it('The component correctly handles different messages passed via props.', async () => {
    let wrapper = mount(GreetBtn, {
      propsData: {
        message: msg,
      }
    });
    await wrapper.find('button').trigger('click');
    expect(wrapper.find('p').text()).toBe(msg);
  });
})
