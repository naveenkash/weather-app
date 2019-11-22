<template>
  <div class="main" v-if="weatherData.main">
    <Weather :data="weatherData" />
    <SideMenu :data="weatherData" />
  </div>
</template>

<script>
import Weather from "./weather/weather";
import SideMenu from "./sidemenu/sideMenu";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Main",
  components: {
    Weather,
    SideMenu
  },
  data() {
    return {
      weatherData: {}
    };
  },
  methods: {
    ...mapActions(["setTemperature"])
  },
  created() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.getCoords.coords.latitude}&lon=${this.getCoords.coords.longitude}&units=metric&APPID=${process.env.VUE_APP_APPID}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.weatherData = data;
        this.setTemperature(data.main.temp);
      });
  },
  computed: {
    ...mapGetters(["getCoords"])
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  min-height:500px;
  overflow-y: auto;
  /* overflwo-x:hidden; */
  display: flex;
  align-items: center;
}
</style>
