<template>
  <div>
    <v-card-title>
      <p>Name: {{name}}</p>
      <p>Email: {{email}}</p>
      <p>Tel: {{tel}}</p>
    </v-card-title>
    <v-card-actions style="width: 100%;">
      <v-btn
          color="orange lighten-1"
          class="text-center"
          text
          @click.prevent="first_page"
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

  data: () => ({

    name: null,
    email: null,
    tel: null,
  }),


  created() {
    if (!this.$store.getters.isFirstTrue) {
      this.$router.push('second');
    } else if(!this.$store.getters.isPrevTrue){
      window.location.pathname = "/";
    } else {
      this.name = this.$store.getters.getName;
      this.email = this.$store.getters.getEmail;
      this.tel = this.$store.getters.getTel;
    }

  },

  methods: {
    first_page() {
      window.location.pathname = '/';
    }
  }
}
</script>

<style scoped>

</style>