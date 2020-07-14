<template>
  <v-app>
    <AppBar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppBar from "@/views/shared/AppBar.vue";
export default {
  name: "App",

  components: {
    AppBar
  },

  data: () => ({
    //
  })
};
</script>
