<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text display-2 font-weight-light">
        Theme
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/hoge"
        source="https://github.com/reireias/vuetifier/blob/master/components/hoge.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-radio-group
        v-model="dark"
        class="centered-radio"
        row
        @change="themeChanged"
      >
        <v-radio label="light" :value="false"></v-radio>
        <v-radio label="dark" :value="true"></v-radio>
      </v-radio-group>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons
  },
  data() {
    return {
      dark: false
    }
  },
  methods: {
    themeChanged() {
      this.$vuetify.theme.dark = this.dark
      this.setDark(this.dark)
    },
    ...mapActions(['setDark'])
  }
}
</script>

<style>
.centered-radio {
  align-items: center;
  display: inline-block;
}
</style>
