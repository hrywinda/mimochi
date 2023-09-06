<template>
  <div class="pagination">
    <button class="font-medium" @click="goToPage(page - 1)" :disabled="page === 1">Previous</button>
    <button class="font-medium">{{ page }}</button>
    <button class="font-medium" @click="goToPage(page + 1)" :disabled="page === totalPages"
      >Next</button
    >
  </div>
</template>

<script>
export default {
  name: "PaginationSection",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  computed: {
    page() {
      return this.currentPage;
    },
  },
  methods: {
    goToPage(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.$emit("update:currentPage", newPage);
      }
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
