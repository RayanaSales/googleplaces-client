<template>
  <div class="header-wrapper">
    <div class="content">
      <div class="title">
        <span>{{ pageTitle }}</span>
      </div>
      <div class="btns">
        <!-- <a title="Notificações" class="alert">
          <img src="@/assets/icons/alert.svg" alt="notificações" />
        </a> -->
        <a
          title="Sair"
          class="logout"
          @click="() => $store.dispatch('session/CLEAR_SESSION')"
        >
          <img src="@/assets/icons/logout.svg" alt="Sair" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    pageTitle: '',
  }),
  watch: {
    '$route.path': {
      immediate: true,
      handler(current) {
        if (current.includes('/map/places')) {
          this.pageTitle = 'Lugares favoritos'
        } else if (current.includes('/map/preview')) {
          this.pageTitle = 'Mapa'
        } else {
          this.pageTitle = 'Index'
        }
      },
    },
  },
}
</script>

<style lang="scss">
.header-wrapper {
  @include media('<tablet-lg') {
    display: none;
  }

  background-color: color(light-grey);
  height: 100px;
  width: 100%;

  .content {
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > .title {
      @include font-config('header-title');
      color: color(header-title);
    }

    > .btns {
      > a {
        cursor: pointer;
      }
      > .alert {
        margin-right: 32px;
      }
    }
  }
}
</style>
