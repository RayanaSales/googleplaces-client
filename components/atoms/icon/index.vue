<template functional>
  <img
    :src="require('@/assets/icons/' + props.icon + '.svg')"
    :class="[data.staticClass, data.class]"
    :style="[data.staticStyle, data.style]"
    :alt="props.alt"
    :data-test="`icon_${props.testId}`"
    draggable="false"
    v-bind="data.attrs"
    v-on="listeners"
  />
</template>

<script>
export default {
  props: {
    testId: {
      type: String,
      default: () => '',
    },
    icon: {
      type: String,
      default: () => '',
      required: true,
    },
    alt: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
}
</style>
