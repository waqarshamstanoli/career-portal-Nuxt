<template>
  <div>
    <v-row>
        <v-col cols="12" lg="8">
            <v-row>
      
      <v-col cols="12" lg="6" class="pt-8">
          <label for="dffsfd" class="mt-16">Preview</label>
          <Card :data="cardData[0]"></Card>
      </v-col>
      <v-col cols="12" lg="6" class="pt-8 pl-md-16">
          <label for="dffsfd" >Post your product for just $5!</label>
                  <TextField outlined rounded :labelName="`Name on card`" class="mt-8"> </TextField>
                  <TextField outlined rounded :labelName="`Card number`"> </TextField>
                  <v-row>
                      <v-col lg="4">
                          <TextField outlined rounded :labelName="`Exp`"> </TextField>
                      </v-col>
                      <v-col lg="4">
                          <TextField outlined rounded :labelName="``"> </TextField>
                      </v-col>
                      <v-col lg="4">
                          <TextField outlined rounded :labelName="`CVC`"> </TextField>
                      </v-col>
                  </v-row>
                  <v-card-actions>
                  <v-btn x-large color="#FBBF23" class="text-capitalize elevation-0 hoverEffect submit mt-4 ml-auto" @click="emitData('productSubmitted')" > Submit </v-btn>
                </v-card-actions>

      </v-col>
          </v-row>
        </v-col>
    </v-row>
    
  </div>
</template>
<script>
import Card from '../components/Card.vue'
import TextField from "./TextField.vue";
export default {
    components:{
        Card,
        TextField
    },
    data(){
        return {
            cardData:[
        { 
          image:require('../assets/cardImage (6).svg'),
          title:'The Grillmaster Box',
          price:'$50',
          content:'The box comes filled with a collection of unique dry herbs guaranteed to set your cookouts apart from the rest and make them the talk of the town. A must-have for all BBQ-loving dads.',
          likesCount:47
        },
    ]
        }
    },
    methods:{
    emitData(component){
      this.$emit('changeComponent',component)
    }
  }
};
</script>
<style scoped></style>
