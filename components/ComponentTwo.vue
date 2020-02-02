<template>
  <v-container fill-height fluid>
    <v-card-text>
      <v-toolbar class="green--text">
        <v-app-bar-nav-icon v-if="tooltipText">
          <v-tooltip id="id1" bottom>
            <template id="id2" v-slot:activator="{ on }">
              <v-icon v-on="on" color="grey">
                help
              </v-icon>
            </template>
            <span id="id3">
              {{ tooltipText }}
            </span>
          </v-tooltip>
        </v-app-bar-nav-icon>
      </v-toolbar>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  props: {
    tooltipText: { type: String, default: '' }
  }
}
</script>

<style scoped>
.show-title {
  font-size: x-small;
}
</style>
