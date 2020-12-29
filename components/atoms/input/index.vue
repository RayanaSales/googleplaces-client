<template functional>
  <input type="text" name="lname" placeholder="Pesquise no Google Maps" />
</template>

<script>
export default {
  props: {
    mask: {
      type: String,
      default: () => '',
    },
    placeholder: {
      type: String,
      default: () => 'Pesquise no Google Maps',
    },
    type: {
      type: String,
      default: () => 'text',
    },
  },
}
</script>

<style>
input {
  border: none;
  width: 170px;
  height: 100%;
}
input::placeholder {
  color: color(users-title-bar);
}
/* input:focus {
  transition: border 200ms ease-in;
  border-color: blueviolet;
} */
</style>
