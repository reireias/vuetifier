<template>
  <v-app :dark="dark">
    <v-toolbar clipped-left fixed app>
      <v-btn icon @click.stop="mini = !mini">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="title">Vuetify {{ version }}</div>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      mini-variant-width="80"
      clipped
      fixed
      app
      permanent
    >
      <v-list v-for="color in colorKeys" :key="color">
        <v-list-tile @click="onColorClick(color)">
          <v-list-tile-avatar :color="color.toLowerCase()" />
          <v-list-tile-title
            >{{ color }}:
            {{ $vuetify.theme[color.toLowerCase()] }}</v-list-tile-title
          >
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile>
          <v-switch
            :value="false"
            :input-value="dark"
            color="primary"
            :label="mini ? '' : 'Dark'"
            @change="onChangeDark($event)"
          ></v-switch>
        </v-list-tile>
      </v-list>
      <v-dialog v-model="dialog" max-width="900px">
        <v-card>
          <v-card-title>{{ dialogTitle }}</v-card-title>
          <v-card-text>
            <v-layout v-for="baseColor in baseColors" :key="baseColor" row>
              <div v-for="colorOption in colorOptions" :key="colorOption">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :color="colors[toCamelCase(baseColor)][colorOption]"
                      fab
                      small
                      v-on="on"
                      @click="
                        onColorParetClick(
                          colors[toCamelCase(baseColor)][colorOption]
                        )
                      "
                    ></v-btn>
                  </template>
                  <span>{{ baseColor }} {{ colorOption }}</span>
                </v-tooltip>
              </div>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialog = !dialog">CANCEL</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid grid-list-md>
        <nuxt v-bind="dark" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import colors from 'vuetify/es5/util/colors'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      drawer: true,
      mini: true,
      colors: colors,
      colorKeys: [
        'Primary',
        'Secondary',
        'Accent',
        'Success',
        'Info',
        'Warning',
        'Error'
      ],
      baseColors: [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange'
      ],
      colorOptions: [
        'base',
        'lighten5',
        'lighten4',
        'lighten3',
        'lighten2',
        'lighten1',
        'darken1',
        'darken2',
        'darken3',
        'darken4',
        'darken5',
        'accent1',
        'accent2',
        'accent3',
        'accent4'
      ],
      selectColor: '',
      dialog: false,
      dialogTitle: '',
      version: process.env.vuetifyVersion
    }
  },
  computed: {
    ...mapGetters(['dark'])
  },
  methods: {
    toCamelCase(text) {
      return text.replace(/-([a-z])/g, group => group[1].toUpperCase())
    },
    onColorClick(color) {
      this.selectColor = this.$vuetify.theme[color.toLowerCase()]
      this.dialogTitle = color
      this.dialog = true
    },
    onColorParetClick(color) {
      const key = this.dialogTitle.toLowerCase()
      this.$vuetify.theme[key] = color
      this.dialog = false
    },
    onChangeDark(value) {
      this.setDark(value)
    },
    ...mapActions(['setDark'])
  }
}
</script>
