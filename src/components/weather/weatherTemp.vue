<template>
  <div class="weather-temp">
    <div class="temp-degree">
      <h1 class="weather-degree">{{getTemperature}}</h1>
      <span>&#176;</span>
    </div>
    <div class="weather-quote">
      <h1 class="weather-quote-1">
        <b v-if="data && data.weather.length>0">{{data.weather[0].main}}</b>
      </h1>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["data"],
  computed: {
    ...mapGetters(["getTemperature"])
  }
};
</script>
<style lang="css" scoped>
.temp-degree {
  font-size: 6em;
  display: flex;
  align-items: flex-start;
}
.weather-temp {
  padding: 0px 60px;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: auto;
  color: white;
}

.weather-quote {
  padding-left: 15px;
  padding-bottom: 40px;
}
.weather-quote h1 {
  font-size: 30px;
}
.weather-quote-1 {
  font-size: 30px;
}
@media only screen and (max-width: 901px) {
 .temp-degree{
    font-size: 5em;
  }
}
@media only screen and (max-width: 567px) {
  .weather-temp {
    padding: 0px 40px;
  }
  .weather-quote {
    padding-bottom: 20px;
  }
   .temp-degree{
    font-size: 4em;
  }
}
@media only screen and (max-width: 500px) {
  .weather-temp {
    padding: 0px 30px;
  }
  .temp-degree{
    font-size: 3em;
  }
}
@media only screen and (max-width: 400px) {
  .weather-quote {
    padding-bottom: 20px;
  }
}
</style>