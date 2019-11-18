<template>
  <div class="weather" :class={fullWidth:getBurgerClicked}>
    <div class="weather-container">
      <BackgroundVideo :atmosId="data.weather[0].id"/>

      <Navbar class="top-element" />
      <WeatherInfo :data="data" />
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Navbar from "../navbar/navbar";
import WeatherInfo from "./weatherInfo";
import BackgroundVideo from "./backgroundVideo";
export default {
  name: "Weather",
  props: ["data"],
  components: {
    Navbar,
    WeatherInfo,
    BackgroundVideo
  },
  computed: {
    ...mapGetters(["getBurgerClicked"])
  },
};
</script>
<style lang="css" scoped>
.weather {
  height: 100vh;
  width: 75%;
  transition: 0.3s;
}
.weather-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.top-element {
  z-index: 10;
}
@media only screen and (max-width:1150px){
  .weather{
    width: 100%;
  }
}
</style>