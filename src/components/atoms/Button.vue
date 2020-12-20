<template>
  <button
    :class="[
      `py-2 px-4 text-sm rounded focus:outline-none focus:ring-2 ring-${color}-500 ring-opacity-50 disabled:opacity-50 disabled:cursor-default`,
      isOutlined(),
      isBlock(),
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
type ColorType = 'primary' | 'warning' | 'error'
export default Vue.extend({
  props: {
    color: {
      type: String as PropType<ColorType | undefined>,
    },
    outlined: Boolean,
    disabled: Boolean,
    block: Boolean,
  },
  methods: {
    isOutlined() {
      if (this.outlined) {
        return `border-${this.color}-500 border-2 text-${this.color}-500`
      }
      return `bg-${this.color}-500 text-white border-2 border-${this.color}-500`
    },
    isBlock() {
      if (this.block) {
        return 'w-full'
      }
    },
  },
})
</script>
