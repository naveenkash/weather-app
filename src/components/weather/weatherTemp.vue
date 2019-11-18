<template>
  <div class="weather-temp">
    <h1 class="weather-degree">{{getTemperature}}&#176;</h1>
    <div class="weather-quote">
      <h1 class="weather-quote-1"><b>{{data.weather[0].main}}</b></h1>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  props: ["data"],
  computed: {
    ...mapGetters(["getTemperature"])
  },
};
</script>
<style lang="css" scoped>
.weather-degree {
  font-size: 12em;
}
.weather-temp {
  padding: 20px 60px;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: auto;
}

.weather-quote {
  padding-left: 15px;
  padding-bottom: 45px;
}
.weather-quote h1 {
  font-size: 30px;
}
.weather-quote-1 {
  font-size: 30px;
}
.weather-quote-2 {
  font-weight: lighter;
}
h1{
    color: white;
}
@media only screen and (max-width:767px){
  .weather-degree{
    font-size: 10em;
  }
}
</style>