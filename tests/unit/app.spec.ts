import App from '@/App.vue'
import { mount } from '@vue/test-utils'
describe('App.vue', () => {
  it('The component render the initial state', () => {
    const wrapper = mount(App)
    if (expect(wrapper.find('h3').exists())) {
      expect(wrapper.find('h3').text()).toBe('0')
    }

    if (expect(wrapper.find('button').exists())) {
      expect(wrapper.find('button').text()).toBe('Increment')
    }
  })
  it('The increment button adds ones to counter', async () => {
    const wrapper = mount(App)
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('h3').text()).toBe('1')
  })
})
