import sideWeatherDetails from "@/components/sidemenu/sideWeatherDetails.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
window.alert = jest.fn();
const localVue = createLocalVue();
localVue.use(Vuex);
describe("check if convert temperature action is firing", () => {
  let actions;
  let store;
  beforeEach(() => {
    actions = {
      convertToFarenheit: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });

  it("convertToFarenheit is firing when checkbox is checked", () => {
    const propData = {
      clouds: { all: 40 },
      visibility: 2,
      main: { humidity: 40 },
      wind: { speed: 1.33 }
    };
    const wrapper = mount(sideWeatherDetails, { store, localVue, propData });
    const checkbox = wrapper.find({ ref: "convertTemp" });
    checkbox.setChecked();
    expect(actions.convertToFarenheit).toHaveBeenCalled();
  });
});
