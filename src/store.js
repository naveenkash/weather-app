import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    coords: {},
    burgerClicked: false,
    temperature: 0,
    locationAllowed: false
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
      state.temperature = value.toFixed(0);
    },
    setLocationAllowed(state, value) {
      state.locationAllowed = value;
    },

    convertToCelsius(state) {
      var tempInCelsius = ((state.temperature - 32) * 5 / 9)
      state.temperature =tempInCelsius.toFixed(0);
       
    },
    convertToFarenheit(state) {
      var tempInFarenheit = (state.temperature * (9 / 5) + 32)
      state.temperature =tempInFarenheit.toFixed(0);
      
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
    },
    setLocationAllowed(context, value) {
      context.commit("setLocationAllowed", value);
    }
  }
});
