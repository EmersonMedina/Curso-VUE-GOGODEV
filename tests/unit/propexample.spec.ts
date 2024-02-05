import PropExample from '@/components/PropExample.vue'
import { mount } from '@vue/test-utils'

describe('PropExample', () => {
  it('The component receive and show title and content props', () => {
    const wrapper = mount(PropExample, {
      props: {
        title: 'I am the title',
        content: 'I am the content'
      }
    })

    if (expect(wrapper.find('h3').exists())) {
      expect(wrapper.find('h3').text()).toBe('I am the title')
    }

    if (expect(wrapper.find('p').exists())) {
      expect(wrapper.find('p').text()).toBe('I am the content')
    }
  })

  it('The component emits the counter value', async () => {
    const wrapper = mount(PropExample, {
      props: {
        title: 'I am the title',
        content: 'I am the content'
      }
    })

    await wrapper.find('button').trigger('click')
    // expect(wrapper.emitted().clickMe[0][0]).toBe(1) /*Error de TS*/
    expect((wrapper.emitted().clickMe as number[][])[0][0]).toBe(1)
  })
})
