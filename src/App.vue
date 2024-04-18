<script>
import AppHeader from "@/components/AppHeader.vue";
import NaBar from "./components/NaBar.vue";

export default {
  components: {
    AppHeader,
    NaBar,
  },
};
</script>

<template>
  <div id="app">
    <div id="wrapper">
      <NaBar v-if="$route.path.includes('/admin')" />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <AppHeader v-if="$route.path.includes('/admin')"/>
          <div class="container-fluid">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>