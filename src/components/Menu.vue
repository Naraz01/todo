<template>
  <div class="menus">
    <div class="menu" @click="onAll">
      Все
    </div>
    <div class="menu" @click="onDone">
      Выполнено
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class Tasks extends Vue {
  get tasks() {
    return this.$store.getters.getTasks;
  }
  onAll() {
    this.$store.dispatch("fetchTasksAction");
  }
  onDone() {
    this.$store.dispatch("selectDone");
  }
  onChosen() {
    this.$store.dispatch("selectChosen");
  }
}
</script>

