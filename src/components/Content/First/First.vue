<template>
  <v-card-title>
    <form style="width: 100%;" @submit="(e)=>{submit(e)}">
      <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="100"
          label="Name"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
      ></v-text-field>

      <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
      ></v-text-field>

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
import {validationMixin} from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {

  name: "First",
  props:['checkArray'],
  mixins: [validationMixin],

  data: () => ({
    name: '',
    email: '',
  }),

  validations:{
    name: {required, minLength: minLength(2)},
    email: {required, email},
  },

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.minLength && errors.push('Name must be longer than 2 characters');
      !this.$v.name.required && errors.push('Name is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Enter a valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
  },

  methods: {
    submit(e) {
      e.preventDefault();
      this.$v.$touch();

      if(!this.$v.$invalid){
        let array = {
          name: this.name,
          email: this.email
        }
        this.$props.checkArray(array);
        // window.location.pathname = "/second";
      }else {
        this.flag = false;
      }
    }
  },


}
</script>

<style scoped>

</style>