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
    pageTitle: ""
  }),
  watch: {
    "$route.path": {
      immediate: true,
      handler(current) {
        if (current.includes("/users")) {
          this.pageTitle = "Usuários";
        } else if (current.includes("/solicitations")) {
          this.pageTitle = "Solicitações de troca";
        } else if (current.includes("/solicitation/")) {
          this.pageTitle = "Detalhes referentes a solicitação";
        } else if (current.includes("/spreadsheet")) {
          this.pageTitle = "Adicionar planilhas";
        } else if (current.includes("/program")) {
          this.pageTitle = "Programa";
        } else if (current.includes("/ranking")) {
          this.pageTitle = "Ranking";
        }
      }
    }
  }
};
</script>

<style lang="scss">
.header-wrapper {
  // background-color: color(light-grey);
  background-color: gray;
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
      @include font-config("header-title");
      // color: color(header-title);
      color: #000;
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
