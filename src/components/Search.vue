<template>
    <input 
      :value="value"
      @input="secrchText"
      @change="secrchText" 
      type="text"
      placeholder="Поиск"
      class="secrch-input"
    />    
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  value = "";
  secrchText(e:any) {
    this.$store.dispatch("fetchSearchAction", e.target.value);
  }
}
</script>

