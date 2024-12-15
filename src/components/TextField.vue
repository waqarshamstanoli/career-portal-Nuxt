<template>
  <div>
    <v-text-field
      outlined
      rounded
      :type="inputType"
      :placeholder="placeHolder"
      :label="labelName"
      :value="modelValue"
      :rules="rules"
      :counter="counterValue"
      @input="(v) => $emit('input', v)"
     
      light
    ></v-text-field>
    
  </div>
</template>
<script>
export default {
  props: ["modelValue", "labelName","placeHolder", "inputType",'counterValue','rules'],
  emits: ["input"],
  // props: {
  //   modelValue: { type: String, required: false, default: "" },
  //   labelName: { type: String, required: false, default: "" },
  // },
  requiredRules: [(v) => (!!v && v != undefined ? true : "Required !")],


  data() {
    return {
     
    };
  },
  
};
</script>
<style >
 .v-text-field--rounded {
   border-radius: 8px !important;
   height: 65px !important;
 }




</style>
