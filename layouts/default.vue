<template>
  <div class="page-content">
    <Sidebar />
    <div class="data-content">
      <Header />
      <div class="main-content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Sidebar: () => import('../components/organisms/sidebar'),
    Header: () => import('../components/molecules/header'),
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
  margin: 0;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#__nuxt,
#__layout,
#__layout > div {
  width: 100%;
  height: 100%;
}

.page-content {
  width: 100%;
  height: 100%;
  background: color(page);
  display: flex;
  flex-direction: row;

  > .data-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    > .main-content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
