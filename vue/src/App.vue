<template>
<section class="vue-section">
    <div style="display: flex; align-item:center;margin-bottom: 10px;">
      <img style="height: 36px;width: 36px;" src="../logo.png" alt="">
      <span style="margin-left: 10px;line-height: 36px;">TODO LIST</span> </div>
    <to-do></to-do>
    <to-do-item></to-do-item>
</section>
</template>
<script lang="ts">
  import { Vue, Options } from "vue-class-component";
  import ToDo from "./Todo.vue";
  import ToDoItem from "./TodoItem.vue";
  @Options({
    watch: {
      count: (value) => {
        console.log(value);
      },
    },
    components: {
      ToDo,
      ToDoItem,
    },
  })
  export default class App extends Vue {}
</script>
<style>
.vue-section {
  width: 50%;
  margin: 20px auto;
}
</style>