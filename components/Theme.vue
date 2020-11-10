<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">Theme</div>
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
        <template #activator="{ on }">
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

    <v-tooltip bottom>
      <template #activator="{ on }">
        <v-btn v-on="on" @click="random"
          ><v-icon left>sync</v-icon>Random</v-btn
        >
      </template>
      <span>'R' key is same feature.</span>
    </v-tooltip>

    <v-flex v-if="presets.length" text-center xs12 md6>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Color Presets</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-layout wrap align-center justify-center>
              <v-flex v-for="preset in presets" :key="preset" xs12>
                <v-spacer></v-spacer>
                <v-btn color="primary" outlined>apply</v-btn>
              </v-flex>
            </v-layout>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-flex>
  </v-layout>
</template>

<script>
import LinkButtons from '@/components/LinkButtons'
import allColors from '@/plugins/colors'
export default {
  components: {
    LinkButtons,
  },
  data() {
    return {
      dark: false,
      primaryMenu: false,
      colors: [
        {
          name: 'primary',
          menu: false,
          value: null,
        },
        {
          name: 'secondary',
          menu: false,
          value: null,
        },
        {
          name: 'accent',
          menu: false,
          value: null,
        },
        {
          name: 'success',
          menu: false,
          value: null,
        },
        {
          name: 'info',
          menu: false,
          value: null,
        },
        {
          name: 'warning',
          menu: false,
          value: null,
        },
        {
          name: 'error',
          menu: false,
          value: null,
        },
      ],
      // TODO: load from other file
      presets: [],
    }
  },
  mounted() {
    this.colors.forEach((color) => {
      color.value = this.$vuetify.theme.themes.light[color.name]
    })
    window.addEventListener('keydown', (e) => {
      if (e.key === 'r') {
        this.random()
      }
    })
  },
  methods: {
    themeChanged() {
      this.$vuetify.theme.dark = this.dark
    },
    setColor(color) {
      this.$vuetify.theme.themes.dark[color.name] = color.value
      this.$vuetify.theme.themes.light[color.name] = color.value
      color.menu = false
    },
    random() {
      this.colors.forEach((color) => {
        const newColor = allColors[Math.floor(Math.random() * allColors.length)]
        this.$vuetify.theme.themes.light[color.name] = newColor
        this.$vuetify.theme.themes.dark[color.name] = newColor
      })
    },
  },
}
</script>

<style>
.centered-radio {
  align-items: center !important;
  display: inline-block !important;
}
.color-button {
  margin: 5px;
}
</style>
