<template>
  <div class="flex items-center">
    <input
      id="remember_me"
      name="remember_me"
      type="checkbox"
      class="custom-checkbox appearance-none h-5 w-5 border border-gray-300 rounded-md checked:border-transparent focus:outline-none"
      :class="`checked:bg-${color}-600 `"
    />
    <label for="remember_me" class="ml-2 block text-sm text-gray-900">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: String,
    color: String,
  },
})
</script>
