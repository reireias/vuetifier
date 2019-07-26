<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        Theme
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/customization/theme"
        source="https://github.com/reireias/vuetifier/blob/master/components/Theme.vue"
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
    <v-flex text-center xs12>
      <v-menu
        v-for="color in colors"
        :key="color.name"
        v-model="color.menu"
        :close-on-content-click="false"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn :color="color.name" style="margin: 5px" v-on="on">{{
            color.name
          }}</v-btn>
        </template>
        <v-card>
          <v-color-picker
            v-model="color.value"
            show-swatches
            flat
            :dark="dark"
          ></v-color-picker>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="color.menu = false">Cancel</v-btn>
            <v-btn color="primary" @click="setColor(color)">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
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
      dark: false,
      primaryMenu: false,
      colors: [
        {
          name: 'primary',
          menu: false,
          value: null
        },
        {
          name: 'secondary',
          menu: false,
          value: null
        },
        {
          name: 'accent',
          menu: false,
          value: null
        },
        {
          name: 'success',
          menu: false,
          value: null
        },
        {
          name: 'info',
          menu: false,
          value: null
        },
        {
          name: 'warning',
          menu: false,
          value: null
        },
        {
          name: 'error',
          menu: false,
          value: null
        }
      ]
    }
  },
  mounted() {
    this.colors.forEach(color => {
      color.value = this.$vuetify.theme.themes.light[color.name]
    })
  },
  methods: {
    themeChanged() {
      this.$vuetify.theme.dark = this.dark
      this.setDark(this.dark)
    },
    setColor(color) {
      this.$vuetify.theme.themes.dark[color.name] = color.value
      this.$vuetify.theme.themes.light[color.name] = color.value
      color.menu = false
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
.color-button {
  margin: 5px;
}
</style>
