import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import target from '@/components/DatePickerSample'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

describe('index', () => {
  it('should be vue instance', () => {
    const vuetify = new Vuetify()
    const wrapper = shallowMount(target, {
      localVue,
      vuetify,
      propsData: {
        value: new Date(2019, 1, 1, 9).toISOString().substr(0, 10),
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
