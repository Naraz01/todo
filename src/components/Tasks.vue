<template>
  <div class="tasks">
    <div 
      v-for="task in tasks.slice().reverse()" 
      :key="task.id"
      class="task"
    >
      <div class="task-info">
        <input
          type="checkbox"
          :data-id="task.id"
          :checked="task.isDone"
          @change="updateDone"
        />
        <input 
          :value="task.text"
          @input="updateText"
          :data-id="task.id"
          class="task-input"
          type="text"
        />
      </div>
      <div class="task-delete" @click="deleteTask(task.id)">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
        </svg>
      </div>
    </div>
    <div v-show="!tasks.length">
      нету
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class Tasks extends Vue {
  get tasks() {
    return this.$store.getters.getTasks;
  }
  deleteTask(id:number) {
    this.$store.dispatch("deleteTasksAction", id);
  }
  updateText(e: any) {
    const data = {
      id: e.target.attributes[0].value,
      text: e.target.value,
    }
    this.$store.dispatch("updateTextAction", data);
  }
  updateDone(e: any) {
    const data = {
      id: e.target.attributes[1].value,
      isDone: e.target.checked,
    }
    this.$store.dispatch("updateDoneAction", data);
  }
}
</script>

