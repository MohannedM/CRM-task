<template>
  <v-app class="white">
    <v-layout justify-space-around row>
      <v-flex xs10>
    <v-card class="mt-4 block" block>
    <v-toolbar flat class="white">
      <v-toolbar-title class="headline red--text lighten-2">
        KPIs (last month)
      </v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
<home></home>

    </v-card>

      </v-flex>

    </v-layout>
  </v-app>
</template>
<script>
import Home from '/imports/ui/views/Home.vue';
export default {
  components:{
    Home
  },
  mounted(){

  }
}
</script>
<style>
h1,h2,h3,h4,h5,h6,p, div, button{
  font-family: 'Lato', 'Roboto', sans-serif; 
}
</style>
