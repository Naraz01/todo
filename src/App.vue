<template>
  <div class="tasks-app">
    <AddTask />
    <Search />
    <Menu />
    <Tasks />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddTask from "./components/AddTask.vue";
import Tasks from "./components/Tasks.vue";
import Menu from "./components/Menu.vue";
import Search from "./components/Search.vue"
@Component({
  components: {
    AddTask,
    Tasks,
    Menu,
    Search
  },
})
export default class App extends Vue {
  created() {
    this.$store.dispatch("fetchTasksAction");
  }
}
</script>