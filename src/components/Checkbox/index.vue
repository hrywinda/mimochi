<template>
  <div :class="['checkbox']">
    <input
      :id="id"
      type="checkbox"
      :checked="checked"
      v-model="picked"
      :value="value"
      @change="updateValue($event.target)"
    />
  </div>
</template>

<script>
export default {
  name: "JCheckbox",
  props: {
    id: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      picked: this.checked,
    };
  },
  mounted() {},
  methods: {
    updateValue(event) {
      this.$emit("onChange", event.checked, event.value);
    },
  },
};
</script>
