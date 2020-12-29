<template>
  <div class="header-wrapper">
    <div class="header-content">
      <div class="data">
        <Input type="text" name="lname" placeholder="CEP, Cidade ou Bairro" />
      </div>
      <div class="btns">
        <div class="ic search">
          <Icon icon="search" class="gray" />
        </div>
        <diV class="ic heart">
          <Icon icon="heart" />
        </diV>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/atoms/input'
import Icon from '@/components/atoms/icon'

export default {
  name: 'Header',
  components: {
    Input,
    Icon,
  },
  data: () => ({
    extenseLocale: '',
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
  @include media('>=tablet-lg') {
    background-color: color(light-grey);
    height: 100px;
    width: 100%;
  }
  @include media('<=tablet-lg') {
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 1;
    background-color: white;
    width: 83%;
    height: 40px;
  }

  .header-content {
    @include media('>=tablet-lg') {
      width: 100%;
      height: 100%;
      padding: 30px;
    }
    @include media('<=tablet-lg') {
      height: 100%;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > .data {
      @include media('<=tablet-lg') {
        height: 100%;
        width: 70%;
        padding-left: 10px;
      }
      @include font-config('header-title');
      color: color(header-title);
    }

    > .btns {
      @include media('<=tablet-lg') {
        width: 30%;
        height: 25px;
      }
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      > .ic {
        display: flex;
        align-items: center;

        > .gray {
          color: red;
          svg {
            fill: red;
          }
        }
      }
      > .search {
        width: 40px;
        border-right: 2px solid color(users-title-bar);
      }
      > .heart {
        width: 25px;
      }
    }
  }
}
</style>
