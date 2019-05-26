<template>
  <div>
    <p class="menu-label is-hidden-touch">Navigation</p>
    <ul class="menu-list">
      <router-link to="/home">
        <font-awesome-icon icon="home"/>Home
      </router-link>
      <router-link to="/transactions" v-show="wallet">
        <font-awesome-icon icon="database"/>Transações
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["wallet"])
  }
};
</script>

<style lang="scss">
.menu-list {
  a.is-active {
    background-color: #ba3426;
  }
}
</style>
