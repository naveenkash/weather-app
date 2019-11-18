<template>
  <div class="navbar" :class={fullWidth:getBurgerClicked}>
    <div class="logo">
      <h2>
        <a href="/">Weather App</a>
      </h2>
    </div>
    <div class="burger" @click="burgerclick()">
      <div class="burger-line-1"></div>
      <div class="burger-line-1"></div>
    </div>
  </div>
</template>
<script>
import { mapActions,mapGetters } from "vuex";
export default {
  data() {
    return {
      burgerclicked: false
    };
  },
  methods: {
    burgerclick() {
      this.burgerclicked = !this.burgerclicked;
      this.setBurgerClick(this.burgerclicked);
    },
    ...mapActions(["setBurgerClick"])
  },
  computed: {
      ...mapGetters(["getBurgerClicked"])
  },
};
</script>
<style lang="css" scoped>

.navbar {
  width: 75%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 40px 60px;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
}
.logo {
  width: auto;
  margin-right: auto;
}
.logo h2 {
  padding: 5px;
}
.logo h2 a {
  text-decoration: none;
   color: white;
}
.burger {
  width: 50px;
  margin-left: auto;
  cursor: pointer;
}
.burger-line-1 {
  width: 100%;
  height: 3px;
  background: rgb(255, 255, 255);
  margin-bottom: 10px;
}
</style>