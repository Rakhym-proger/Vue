<template>
  <v-card-title>
    <form style="width: 100%;" @submit="(e)=>{submit(e)}">
      <masked-input v-model="tel" mask="\+\7\(711\)-111-11-11" placeholder="Phone number" style="width: 100%"/>


      <v-card-actions style="width: 100%;">
        <v-btn
            color="orange lighten-1"
            class="text-center"
            type="submit"
            text
            style="width: 100%;"
        >
          Next
        </v-btn>
      </v-card-actions>
    </form>
  </v-card-title>

</template>

<script>
import MaskedInput from "vue-masked-input";


export default {
  name: "Second",
  props: ['checkSecond'],

  data: () => ({
    tel: '',
  }),
  components: {
    MaskedInput
  },

  methods: {
    submit(e) {
      e.preventDefault();
      let a = this.tel;
      if (!a.includes("_") && a.length > 0) {
        this.$props.checkSecond(this.tel);
      }
    }
  },
}
</script>

<style scoped>

</style>