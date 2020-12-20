<template>
  <div class="dropdown-content">
    <div v-for="item in items" :key="item.label" class="dropdown-item">
      <div
        v-click-outside="automaticllyCloseDropdown"
        :class="checkClasses(item)"
        @click="
          item.subItems.length > 0 ? openDropdown(item) : handleItemClick(item)
        "
      >
        <div class="info">
          <div v-if="item.icon" class="icon">
            <Icon :icon="item.icon" />
          </div>
          <div class="title">
            <span>{{ item.label }}</span>
          </div>
        </div>
        <div v-if="item.subItems.length > 0" class="icon dropdown-icon">
          <Icon
            icon="dropdown"
            :class="dropdownOpened === true ? 'option opened' : 'option closed'"
          />
        </div>
      </div>
      <div
        v-if="item.subItems.length > 0 && dropdownOpened"
        class="list-sub-items"
      >
        <div
          v-for="sub in item.subItems"
          :key="sub.label"
          :class="
            sub.router === activeSubitem ? 'sub-item active-sub' : 'sub-item'
          "
          @click="handleSubitemClick(sub)"
        >
          <div v-if="sub.icon" class="icon">
            <Icon :icon="sub.icon" />
          </div>
          <div class="title-content">
            <span class="title">{{ sub.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Icon: () => import("../../atoms/icon")
  },
  props: {
    parentComponent: {
      type: String,
      default: "menu"
    },
    enableAutomaticllyCloseDropdown: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => [
        // {
        //   id: 0,
        //   label: 'Usuários',
        //   icon: 'user',
        //   router: '/users',
        //   subItems: [],
        // },
        {
          id: 1,
          label: "Solicitações",
          icon: "requests",
          router: "/solicitations",
          subItems: []
        },
        {
          id: 2,
          label: "Adicionar planilhas",
          icon: "upload",
          router: "/spreadsheet",
          subItems: []
        },
        {
          id: 3,
          label: "Ranking",
          icon: "ranking",
          router: "/ranking",
          subItems: []
        }
      ]
    }
  },
  data: () => ({
    activeItem: "",
    activeSubitem: "",
    dropdownOpened: false
  }),
  mounted() {
    this.activeItem = this.$route.path;
  },
  methods: {
    checkClasses(item) {
      const activeClass =
        this._props.parentComponent === "menu"
          ? "active-item"
          : "active-item-sol";

      return item.router === this.activeItem && this.dropdownOpened
        ? "label " + activeClass
        : "label";
    },
    automaticllyCloseDropdown(event) {
      if (this.dropdownOpened && this.enableAutomaticllyCloseDropdown) {
        this.dropdownOpened = false;
      }
    },
    handleItemClick(option) {
      // se a rota onde estou, é diferente da rota que estou indo, fecha o dropdown
      if (!this.$route.path.includes(option.router)) {
        // se o dropdown estiver aberto, feche ele
        if (this.dropdownOpened) {
          this.openDropdown(option);
        }
      }
      this.activeItem = option.router;
      this.$router.push(option.router);
    },
    openDropdown(option) {
      // if closing, clear activeSubitem
      if (this.dropdownOpened) {
        this.activeSubitem = "";
      }
      this.dropdownOpened = !this.dropdownOpened;
      this.activeItem = option.router;
    },
    handleSubitemClick(subOption) {
      this.$emit("emitchoice", subOption);
      this.activeSubitem = subOption.router;
      this.$router.push(subOption.router);
    }
  }
};
</script>

<style lang="scss">
.dropdown-content {
  margin-left: auto;
  width: 245px;
  cursor: pointer;

  > .dropdown-item {
    > .label {
      display: flex;
      flex-direction: row;
      text-align: center;
      align-items: center;
      height: 40px;
      margin-bottom: 15px;
      justify-content: space-between;

      > .info {
        display: flex;
        flex-direction: row;
        align-items: center;

        > .icon {
          margin-right: 10px;
          margin-left: 10px;
        }

        > .title {
          > span {
            @include font-config("text-button");
            // color: color(header-title);
            color: black;
          }
        }
      }

      > .dropdown-icon {
        margin-right: 10px;
        margin-top: 3px;
        .opened {
          transform: rotate(180deg);
          transition: transform 200ms ease-in;
        }
      }
    }

    > .list-sub-items {
      width: 215px;
      margin-left: auto;
      margin-bottom: 15px;

      > .sub-item {
        height: 40px;
        display: flex;
        align-items: center;

        > span {
          margin-left: 14px;
        }
      }
    }
  }

  .active-item {
    background: color(red-linear);
    mix-blend-mode: normal;
    border-radius: 4px;

    span {
      // color: color(text-hover-white) !important;
      color: white !important;
    }
    .icon {
      img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(330deg)
          brightness(104%) contrast(102%);
      }
    }
  }

  .active-item-sol {
    mix-blend-mode: normal;
    border-radius: 4px;

    // > .info {
    //   margin-left: 19px;
    // }

    .icon {
      img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(330deg)
          brightness(104%) contrast(102%);
      }
    }
  }

  .active-sub {
    background: color(orange-linear);
    mix-blend-mode: normal;
    border-radius: 4px;
    display: flex;
    flex-direction: row;

    span {
      // color: color(text-hover-white);
      color: white;
    }
    > .icon {
      margin-left: 10px;
      img {
        filter: none !important;
      }
    }
  }

  .title-content {
    margin-left: 14px;

    > span {
      @include font-config("text-button");
      // color: color(secondary-gray);
      color: gray;
    }
  }
}
</style>
