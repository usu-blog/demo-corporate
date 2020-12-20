<template>
  <div class="flex items-center">
    <input
      class="custom-radio appearance-none outline-none h-5 w-5 border-2 border-gray-300 rounded-full"
      :class="`checked:bg-${color}-500 checked:border-${color}-500`"
      id="radio"
      type="radio"
      name="test"
    />
    <label class="ml-2" for="radio">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    id: String,
    name: String,
    color: String,
    label: String,
  },
})
</script>
