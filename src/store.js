import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    coords: {},
    burgerClicked: false,
    temperature: 0
  },
  getters: {
    getCoords(state) {
      return state.coords;
    },
    getBurgerClicked(state) {
      return state.burgerClicked;
    },
    getTemperature(state) {
      return state.temperature;
    }
  },
  mutations: {
    setCoords(state, value) {
      state.coords = value;
    },
    setBurgerClick(state, value) {
      state.burgerClicked = value;
    },
    setTemperature(state, value) {
      state.temperature = value;
    },
    convertToFarenheit(state) {
      state.temperature = state.temperature * (9 / 5) + 32;
    },
    convertToCelsius(state) {
      state.temperature = ((state.temperature - 32) * 5) / 9;
    }
  },
  actions: {
    setCoords(context, value) {
      context.commit("setCoords", value);
    },
    setBurgerClick(context, value) {
      context.commit("setBurgerClick", value);
    },
    setTemperature(context, value) {
      context.commit("setTemperature", value);
    },
    convertToFarenheit(context) {
      context.commit("convertToFarenheit");
    },
    convertToCelsius(context) {
      context.commit("convertToCelsius");
    }
  }
});
