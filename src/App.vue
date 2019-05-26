<template>
  <div id="app">
    <navbar/>
    <div class="main-content columns is-fullheight">
      <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <sidebar/>
      </aside>
      <div class="container column is-10">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>


<style lang="scss">
@charset "utf-8";

// Import a Google Font
@import url("https://fonts.googleapis.com/css?family=Nunito:400,700");

// Set your brand colors
$purple: #ba3426;
$pink: #fa7c91;
$brown: #757763;
$beige-light: #d0d1cd;
$beige-lighter: #eff0eb;

// Update Bulma's global variables
$family-sans-serif: "Nunito", sans-serif;
$grey-dark: $brown;
$grey-light: $beige-light;
$primary: $purple;
$menu-item-active-background-color: $primary;

// Import only what you need from Bulma
@import "bulma";
</style>
