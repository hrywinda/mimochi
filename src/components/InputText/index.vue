<template>
  <input
    type="text"
    v-model="inputValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :class="['input-text', isError ? 'error' : '']"
    @input="updateValue($event.target.value)"
  />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    // validationType: {
    //   type: String,
    //   default: "", // email or 'phoneNumber'
    // },
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: this.value,
      isValid: false,
      isError: this.error,
    };
  },
  computed: {
    //move to utils or better use validator library
    isValidationValid() {
      if (this.validationType === 'email') {
        return this.isEmailValid;
      } else if (this.validationType === 'phoneNumber') {
        return this.isPhoneNumberValid;
      }
      return false;
    },
    isEmailValid() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.inputValue);
    },
    isPhoneNumberValid() {
      const phoneNumberRegex = /^[0-9+() -]{6,20}$/;
      return phoneNumberRegex.test(this.inputValue);
    },
  },
  methods: {
    updateValue(value) {
      this.inputValue = value;
      //   this.isValid = this.validationType ? this.isValidationValid : true;
      this.isError = !this.isValid;
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
