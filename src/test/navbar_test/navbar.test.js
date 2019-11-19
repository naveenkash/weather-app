import Navbar from "@/components/navbar/navbar.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

window.alert = jest.fn();
const localVue = createLocalVue();
localVue.use(Vuex);

describe("check navbar burger menu boolean", () => {
  it("navbar boolean is false", () => {
    const wrapper = mount(Navbar);
    expect(wrapper.vm.burgerclicked).toBeFalsy();
  });
});

describe("check if action are firing", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      setBurgerClick: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });

  it('calls store action "setBurgerClick" when burger Menu is clicked', () => {
    const wrapper = mount(Navbar, { store, localVue });
    wrapper.find(".burger").trigger("click");
    expect(actions.setBurgerClick).toHaveBeenCalled();
  });
});
