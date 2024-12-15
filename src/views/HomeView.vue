<template>
 <v-container>
  <v-row class=" pt-0 mt-0">
    <v-col class="pt-0 mt-0 px-md-12" lg="4" md="12" sm="12" v-for="product in getAddedProducts" :key="product">
      
      <Card :data="product"></Card>
    </v-col>
    <img src="" alt="">
  </v-row>

 </v-container>
</template>

<script>
import Card from "../components/Card.vue"
import { mapActions,mapGetters } from "vuex";
export default {
  name: "HomeView",

  components: {
    Card
  },
  data(){
    return{
      products:[
        { 
          image:require('../assets/cardImage (6).svg'),
          title:'The Grillmaster Box',
          price:'$50',
          content:'The box comes filled with a collection of unique dry herbs guaranteed to set your cookouts apart from the rest and make them the talk of the town. A must-have for all BBQ-loving dads.',
          likesCount:47
        },
        {
          image:require('../assets/cardImage (1).svg'),
          title:'LED Beachball',
          price:'$50',
          content:'This LED beach ball is a must-have for any pool party. This large sixteen-inch ball can glow in one of sixteen alluring colors and is made of a strong and durable PVC that makes it perfect for any outdoor gathering.',
          likesCount:47
        },
        {image:require('../assets/cardImage (2).svg'),
          title:'Flyride Hydroflyer Aerial Jet Ski',
          price:'$50',
          content:'Experience the unmatched thrill of hydroflight! This fun two-seater comes equipped with a flight control system that can do everything from self balance to performing automated barrel rolls!',
          likesCount:47
        },
        {image:require('../assets/cardImage (3).svg'),
          title:'The Grillmaster Box',
          price:'$50',
          likesCount:47
        },
        {image:require('../assets/cardImage (4).svg'),
          title:'The Grillmaster Box',
          price:'$50',
          likesCount:47
        },
        {image:require('../assets/cardImage (5).svg'),
          title:'The Grillmaster Box',
          price:'$50',
          likesCount:47
        },
      ]
    }
  },
  methods: {
    ...mapActions(['get_products']),
    getProucts(){
        this.get_products().then((response) => {
          if (response.data.errors) {
            alert(response);
            setTimeout(() => {
              // this.errors = {};
            }, 5000);
          } else {
            this.products=response.data.data
            // this.loading = false;
          }
        })
        .finally(() => {
          // this.$emit("overlay", false);
        });


      },
    },
    computed: {
    ...mapGetters(['getAddedProducts']),
    },
    mounted(){
      this.getProucts()
    }
};
</script>
