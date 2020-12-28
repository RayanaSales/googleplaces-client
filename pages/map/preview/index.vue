<template>
  <div class="map-preview">mapa preview</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.map-preview {
  @include media('<tablet-lg') {
    background: red;
  }
  @include media('>=tablet-lg') {
    background: green;
  }
}
</style>
