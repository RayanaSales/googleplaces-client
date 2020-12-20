<template>
  <div class="sidebar-content">
    <div class="logo-content">
      <img
        class="admin-logo"
        src="@/assets/images/LogoAdmin.png"
        alt="Admin logo"
      />
    </div>
    <Dropdown />
  </div>
</template>

<script>
export default {
  components: {
    Dropdown: () => import("../../molecules/dropdown")
  }
};
</script>

<style lang="scss">
.sidebar-content {
  height: 100%;
  width: 320px;
  // background: color(yellow-linear);
  background: yellow;

  > .logo-content {
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    place-items: center;
  }
}
</style>
