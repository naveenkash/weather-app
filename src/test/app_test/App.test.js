import { mount } from "@vue/test-utils";
import App from "@/App.vue";
window.alert = jest.fn();

const wrapper = mount(App);
describe("check location boolean", () => {
  it("location boolean is true", () => {
    expect(wrapper.vm.setLocationAllowed).toBeTruthy();
  });
  it("loading boolean is true", () => {
    expect(wrapper.vm.loading).toBeTruthy();
  });
});
