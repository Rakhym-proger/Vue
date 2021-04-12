<template>
  <v-container fluid style="min-height: 65vh;">

    <v-card class="mx-auto my-12" max-width="374">
      <router-view :checkArray="checkArray" :checkSecond="checkSecond"/>
    </v-card>

  </v-container>
</template>

<script>

export default {
  name: "Content",
  data: () => ({

    name:null,
    email:null,
    tel:null,
  }),

  methods: {
    checkArray(array) {
      this.name = array.name;
      this.email = array.email;

      this.$store.commit('updateName', this.name);
      this.$store.commit('updateEmail', this.email);

      // alert(this.name + "   " + this.email);
    },
    checkSecond(tel){
      this.$store.commit('updateTel', tel);

      // alert(this.tel);
    }
  },
}
</script>