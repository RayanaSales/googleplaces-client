<template>
  <div class="sidebar-content">
    <div class="logo-content"></div>
    <Dropdown />
  </div>
</template>

<script>
export default {
  components: {
    Dropdown: () => import('../../molecules/dropdown'),
  },
}
</script>

<style lang="scss">
.sidebar-content {
  @include media('<tablet-lg') {
    display: none;
  }

  height: 100%;
  width: 320px;
  background: color(yellow-linear);

  > .logo-content {
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    place-items: center;
  }
}
</style>
