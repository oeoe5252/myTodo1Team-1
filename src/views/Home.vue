<template>
  <default-layout>
    <Todo />
    <TodoList />
  </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import Todo from "@/components/Todo";
import TodoList from "@/components/TodoList";

export default {
  name: "App",
  components: {
    DefaultLayout,
    Todo,
    TodoList,
  }
};
</script>