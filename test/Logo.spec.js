import { mount } from "@vue/test-utils"

describe("Logo", () => {
  test("is a Vue instance", () => {
    const wrapper = mount({})
    expect(wrapper.vm).toBeTruthy()
  })
})
