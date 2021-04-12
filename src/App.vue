<template>
  <v-app>
    <Navbar/>
    <Content/>
    <Footer/>

  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Content from "@/components/Content/Content";

export default {
  name: 'App',
  components: {Content, Footer, Navbar},
  methods: {
    getName(){
      return this.$store.getters.getName;
    },
    getEmail(){
      return this.$store.getters.getEmail;
    },
    getTel(){
      return this.$store.getters.getTel;
    }
  },
};
</script>
