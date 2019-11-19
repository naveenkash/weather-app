<template>
  <div class="weather-temp">
    <h1 class="weather-degree">{{getTemperature}}</h1>
    <div class="weather-quote">
      <h1 class="weather-quote-1">
        <b>{{data.weather[0].main}}</b>
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
  padding-bottom: 40px;
}
.weather-quote h1 {
  font-size: 30px;
}
.weather-quote-1 {
  font-size: 30px;
}

h1 {
  color: white;
}
@media only screen and (max-width: 767px) {
  .weather-degree {
    font-size: 10em;
  }
}
@media only screen and (max-width: 567px) {
  .weather-degree {
    font-size: 8em;
  }
  .weather-temp {
    padding: 20px 40px;
  }
  .weather-quote {
    padding-bottom: 30px;
  }
}
@media only screen and (max-width: 500px) {
  .weather-temp {
    padding: 20px 30px;
  }
}
@media only screen and (max-width: 400px) {
  .weather-degree {
    font-size: 6em;
  }
  .weather-quote {
    padding-bottom: 20px;
  }
}
</style>