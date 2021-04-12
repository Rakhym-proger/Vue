<template>
  <div>
    <v-card-title>
      Third
    </v-card-title>
    <v-card-actions style="width: 100%;">
      <v-btn
          color="orange lighten-1"
          class="text-center"
          text
          @click="first_page"
          style="width: 100%;"
      >
        Reset and Start again
      </v-btn>
    </v-card-actions>
  </div>

</template>

<script>
export default {
  name: "Third",
  methods: {
    first_page() {
      window.location.pathname = '/';
    }
  }
}
</script>

<style scoped>

</style>