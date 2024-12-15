<template>
  <div>
    <v-text-field
      outlined
      rounded
      :placeholder="placeholderText"
      :label="labelName"
      :value="modelValue"
      :rules="rules"
      :counter="counterValue"
      @input="(v) => $emit('input', v)"
      @keydown="IsNumber"
      light
    ></v-text-field>
    
  </div>
</template>
<script>
export default {
  props: ["modelValue", "labelName", "inputType",'counterValue','rules','placeholderText'],
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
  methods: {
    IsNumber(event) {
      console.log(event)
  if (!/\d/.test(event.key) && event.key !== '.' && event.key !== 'Backspace') return event.preventDefault();
}
    // updateInput(event) {
    //   event = event.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    //   this.$emit("update:modelValue", event);
    // },
  },
};
</script>
<style >
 .v-text-field--rounded {
   border-radius: 8px !important;
   height: 65px !important;
 }




</style>
