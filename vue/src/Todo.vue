<template>
  <section class="operateArea">
    <div class="operateArea-input-box">
      <input class="operateArea-input-box_input" v-model="inputValue" placeholder="添加 TODO 项" type="text">
    </div>
    <div class="operateArea-buttons">
      <button @click="add">添加</button>
      <button @click="sendOtherService('react-app')">发送到 React</button>
      <button @click="sendOtherService('ng-app')">发送到 Ng</button>
    </div>
  </section>
</template>
<script lang="ts">
  import { Vue, Options } from "vue-class-component";
  import { uuid } from "./tools";
  @Options({ name: "ToDo" })
  export default class ToDo extends Vue {
    inputValue: string = "";

    add() {
      if (this.inputValue) {
        this.$store.commit("add", {
          value: this.inputValue,
          id: uuid(),
          from: "Vue",
        });
        this.inputValue = "";
      }
    }

    mounted() {
      let self = this;
      this.$nextTick(function () {
        if (self.$onGlobalStateChange) {
          self.$onGlobalStateChange((state: any) => {
            if (state["vue-app"].length) {
              for (const item of state["vue-app"]) {
                self.$store.commit("add", {
                  ...item,
                });
              }
              self.$setGlobalState({
                "vue-app": [],
              });
            }
          });
        }
      });
    }

    sendOtherService(serviceKey: string) {
      if (this.$setGlobalState) {
        this.$setGlobalState({
          [serviceKey]: [
            {
              value: this.inputValue,
              id: uuid(),
              from: "Vue",
            },
          ],
        });
        this.inputValue = "";
      }
    }
  }
</script>
<style scoped>
.todo {
  display: flex;
}
.operateArea {
  display: flex;
}
.operateArea-buttons {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 240px;
}
.operateArea-buttons > button {
  height: 28px;
  margin: 0 4px;
  cursor: pointer;
}
.operateArea-input-box {
  flex: 0 1 100%;
}
.operateArea-input-box_input {
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 96%;
  padding-left: 10px;
  font-size: 14px;
}
</style>