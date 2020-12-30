import { mount } from '@vue/test-utils'
import Intro from '@/components/Intro.vue'

describe('Intro component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Intro)
    expect(wrapper.vm).toBeTruthy()
  })
})
