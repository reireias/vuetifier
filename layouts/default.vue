<template>
  <v-app :dark="dark">
    <v-navigation-drawer v-model="drawer" width="80" fixed app permanent>
      <v-list>
        <v-list-tile>
          <v-switch
            :value="false"
            :input-value="dark"
            color="primary"
            @change="onChangeDark($event)"
          ></v-switch>
        </v-list-tile>
      </v-list>
      <v-btn
        v-for="color in colorKeys"
        :key="color"
        class="no-shadow"
        fab
        small
        :color="color.toLowerCase()"
        @click="onColorClick(color)"
      ></v-btn>
      <v-dialog v-model="dialog" max-width="800px">
        <v-card>
          <v-container class="dialog-container">
            <v-layout row wrap>
              <v-flex xs2>
                {{ dialogTitle }}
              </v-flex>
              <v-flex xs10>
                <v-layout v-for="baseColor in baseColors" :key="baseColor" row>
                  <div
                    v-for="colorOption in colorOptions"
                    :key="colorOption"
                    class="color-button-container"
                  >
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          class="color-button no-shadow"
                          :color="colors[toCamelCase(baseColor)][colorOption]"
                          block
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
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        <!--
        <v-card>
          <v-card-title>{{ dialogTitle }}</v-card-title>
          <v-card-text>
            <v-layout v-for="baseColor in baseColors" :key="baseColor" row>
              <div
                v-for="colorOption in colorOptions"
                :key="colorOption"
                class="color-button-container"
              >
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      class="color-button no-shadow"
                      :color="colors[toCamelCase(baseColor)][colorOption]"
                      block
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
        -->
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
      colors,
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
        'accent1',
        'accent2',
        'accent3',
        'accent4'
      ],
      selectColor: '',
      dialog: false,
      dialogTitle: ''
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

<style>
.v-navigation-drawer {
  text-align: center;
}
.color-button-container {
  width: 40px;
  height: 40px;
}
.color-button {
  min-width: 0px !important;
  margin: 0px !important;
  height: 100% !important;
  border-radius: 0px !important;
}
.no-shadow {
  box-shadow: none !important;
}
.dialog-container {
  padding: 10px !important;
}
</style>
