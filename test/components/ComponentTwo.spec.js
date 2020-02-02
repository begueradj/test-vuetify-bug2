import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'
import ComponentTwo from '@/components/ComponentTwo.vue'

const vuetify = new Vuetify()
let wrapper = null

beforeEach(() => {
  const app = document.createElement('div');
  app.setAttribute('data-app', true);
  document.body.append(app);
  wrapper = mount(ComponentTwo, {
    vuetify,
    propsData: {
      tooltipText: 'science'
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('ComponentTwo.vue:', () => {
  it('1. Mounts properly', () => {
    expect(wrapper.isVueInstance()).toBe(true) // Ok
  })

  it('2. Access children by ID', async () => {
    const icons = wrapper.findAll('.v-icon')
    expect(icons.length).toBe(1) // Ok

    const helpIcon = icons.at(0)
    expect(helpIcon.text()).toEqual('help') // Ok

    helpIcon.trigger('mouseenter')
    await wrapper.vm.$nextTick()

    const e1 = wrapper.find('#id2') // or id3
    console.log(e1) // undefined
  })
})

