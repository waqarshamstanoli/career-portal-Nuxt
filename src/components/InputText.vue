<template>
  <div>
    {{ value }}
    <input
      class="textField"
      type="text"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: { type: String, required: false, default: "" },
    label: { type: String, required: false, default: "" },
    hint: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.textField {
  width: 345px;
  height: 50px;
  left: 68px;
  top: 663px;
  background: #ffffff;
  border: 1px solid #e0e4ec;
  border-radius: 8px;
}
.textField:focus {
  
  border: 1px solid #e0e4ec !important;
}
</style>
