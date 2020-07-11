<template>
  <v-main>
    <MainMap />
  </v-main>
</template>

<script>
import MainMap from "@/components/map/MainMap.vue"

export default {
  name: "Home",
  components: {
    MainMap,
  }
};
</script>
