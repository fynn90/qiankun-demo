<template>
  <section class="todoList-section">
    <div class="todoList-item_div" v-for="item of list" :key="item.id">
      <div class="todo-item_div">{{item.value}}</div>
      <div class="todo-item_btn">
        <span @click="rm(item.id)">移除</span>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { Vue, Options } from "vue-class-component";
  @Options({ name: "ToDoItem" })
  export default class ToDoItem extends Vue {
    get list() {
      return this.$store.state.list;
    }

    rm(id: string) {
      this.$store.commit("rm", { id });
    }
  }
</script>
<style>
.todoList-section {
  width: 100%;
  margin-top: 20px;
}
.todoList-item_div {
  display: flex;
  align-self: center;
  margin-top: 8px;
}
.todo-item_div {
  flex-shrink: 0;
  width: calc(100% - 240px);
  padding: 6px 8px;
  background-color: #f2f2f2;
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px #e5e5e5 inset, -1px -1px 2px 1px #e5e5e5 inset;
}
.todo-item_btn {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #ef5350;
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.25s ease;
  transition: transform 0.25s ease;
}
.todo-item_btn:hover {
  color: #e53935;
  transform: scale(1.15);
}
</style>