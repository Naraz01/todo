<template>
    <input 
        :value="text"
        @input="updateText()" 
        type="text"
    />    
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EditInput extends Vue {
    @Prop() text!: string;
    @Prop() id!: number;
    updateText(e:any) {
        console.log(this.id, this.text);
        
    }
}
</script>

