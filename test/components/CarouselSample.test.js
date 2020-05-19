import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import target from '@/components/CarouselSample'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('index', () => {
  it('should be vue instance', () => {
    const vuetify = new Vuetify()
    const wrapper = shallowMount(target, {
      localVue,
      vuetify,
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
