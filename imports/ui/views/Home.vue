<template>
  <div>
    <v-container class="my-0">
      <v-layout row justify-space-around>
        <v-flex xs8 class="red--text lighten-2">
          <v-select 
          block
          :items="orders" 
          label="Company"
          class="red--text lighten-2" 
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout row justify-space-around class="text-xs-center mt-5">
        <v-flex xs12 sm4>
          <v-icon>filter</v-icon>
          <h4 class="headline red--text lighten-2 mt-2">77 %</h4>
          <h5 class="title red--text lighten-2 mr-2 mt-2">Customer winning rate</h5>
          <p class="body-1 mt-2">New Customers: 270<br>Requests: 350</p>
        </v-flex>
        <v-flex xs12 sm4>
          <v-icon>filter</v-icon>
          <h4 class="headline red--text lighten-2 mt-2">86 %</h4>
          <h5 class="title red--text lighten-2 mr-2 mt-2">Order fullfillment</h5>
          <p class="body-1 mt-2">Fullfilled orders: 230<br>Orders: 270</p>
        </v-flex>
        <v-flex xs12 sm4>
          <v-icon>filter</v-icon>
          <h4 class="headline red--text lighten-2 mt-2">75 %</h4>
          <h5 class="title red--text lighten-2 mr-2 mt-2">Customer winning rate</h5>
          <p class="body-1 mt-2">Recieved ratings: 130</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { Orders } from "../../../lib/collections";

export default {
  data(){
    return{
      items:['Company'],
      orders:[]
    }
  },
  created(){
    // const orders =  this.$store.getters.orders;

    // console.log(this.$store.getters.orders, 'From store getters')
    // console.log(this.$store.state, 'From store state')
    console.log(this.orders, 'ORDERS');
  },
  meteor:{
    data:{
      orders(){
        Orders.find({}).fetch();
      }
    }
  }
}
</script>
