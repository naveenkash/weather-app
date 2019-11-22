<template>
  <div
    class="weather-side-menu"
    :class="{ showOnBurgerClicked: getBurgerClicked }"
  >
    <div class="side-data">
      <div class="side-info">
        <span class="side-key data-key">Area</span>
        <span>{{ data.name }}</span>
      </div>
      <SideWeatherDetail class="side-info" :data="data" />
    </div>
  </div>
</template>
<script>
import SideWeatherDetail from "./sideWeatherDetails";
import { mapGetters } from "vuex";
export default {
  props: ["data"],
  components: {
    SideWeatherDetail
  },
  computed: {
    ...mapGetters(["getBurgerClicked"])
  }
};
</script>
<style>
.showOnBurgerClicked {
  right: 0 !important;
}
.weather-side-menu {
  height: 100vh;
  width: 25%;
  background: rgba(0, 0, 0, 0.897);
  color: white;
  transition: 0.3s;
  position: fixed;
  top: 0;
  right: -25%;
  overflow-y:auto;
  padding-bottom:20px;
}
.side-info {
  padding: 40px 35px;
  border-bottom: 1px solid rgb(61, 61, 61);
}
.side-key {
  color: grey;
}
.data-key {
  margin-right: 10px;
}
.weather-head {
  font-size: 16px;
}
.data-value {
  float: right;
  clear: both;
}
.side-info-value {
  width: 100%;
  margin-top: 25px;
}
@media only screen and (max-width: 1150px) {
  .weather-side-menu {
    background: #1a1a1a;
    z-index: 9;
    width: 300px;
    right: -300px;
  }
  .side-data {
    padding-top: 75px;
  }
}
@media only screen and (max-width: 500px) {
  .weather-side-menu {
    width: 100%;
    right: -100%;
  }
}
</style>
