<template>
  <div class="task-add">
    <input
      v-model="valueInput"
      v-on:keyup.enter="addTasks" 
      placeholder="Добавить задача" 
      class="task-add__input" 
    />
    <div @click="addTasks" class="task-add__btn">
      Добавить
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AddTask extends Vue {
  valueInput = "";
  addTasks() {
    if (this.valueInput) {
      this.$store.dispatch("addTasksAction", { text: this.valueInput, isDone: false, isChosen: false });
    }
    else {
      alert('напишите текст')
    }
    this.valueInput = "";
  }
}
</script>

