<template>
  <input
    type="text"
    v-model="inputValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :class="['input-text']"
    @input="updateValue($event.target.value)"
  />
</template>

<script>
export default {
  name: "InputText",
  props: {
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    updateValue(value) {
      this.inputValue = value;
      console.log(value);
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
