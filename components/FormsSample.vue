<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-xs-center xs12>
      <div class="title-text display-2 font-weight-light">
        Forms
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/forms"
        source="https://github.com/reireias/vuetifier/blob/master/components/FormsSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-xs-center xs12>
      <v-container fluid>
        <v-layout column align-center justify-center>
          <v-form v-model="valid" class="form-sample">
            <v-flex xs12>
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-flex>
          </v-form>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons
  },
  data() {
    return {
      valid: true,
      firstname: '',
      lastname: '',
      email: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>

<style>
.form-sample {
  width: 100%;
}
</style>
