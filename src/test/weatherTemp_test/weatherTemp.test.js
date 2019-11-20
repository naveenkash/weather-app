import weatherTemp from "@/components/weather/weatherTemp";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
window.alert = jest.fn();
const localVue = createLocalVue();
localVue.use(Vuex);
describe("check if getter is working", () => {
  let getters;
  let store;
  beforeEach(() => {
    getters = {
      getTemperature: () => 2
    };
    store = new Vuex.Store({
      getters
    });
  });
  it("render getTemperature in weatherTemp.vue h1", () => {
    const propData = { weather: [{ main: 25 }]};
    const wrapper = shallowMount(weatherTemp, { store, localVue, propData });
    const temp = wrapper.find(".weather-degree");
    expect(temp.text()).toBe(getters.getTemperature().toString());
  });
});