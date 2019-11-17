<template>
  <div class="weather-info">
    <div class="weather-info-wrapper">
      <WeatherTemp :data="data" />
      <div class="line-btwn"></div>
      <MetaData :data="data" />
    </div>
  </div>
</template>
<script>
import WeatherTemp from "./weatherTemp";
import MetaData from "./weatherMetaData";
export default {
  props: ["data"],
  components: {
    WeatherTemp,
    MetaData
  }
};
</script>
<style lang="css" scoped>
.weather-info {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 5;
}
.weather-info-wrapper {
  width: 100%;
  height: auto;
}
.line-btwn {
  margin-left: 15px;
  border-top: 1px solid grey;
}
</style>