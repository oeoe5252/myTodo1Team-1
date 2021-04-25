<template>
  <default-layout>
    <Todo />
    <TodoContent />
  </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import Todo from "@/components/Todo";
import TodoContent from "@/components/TodoContent";

export default {
  name: "App",
  components: {
    DefaultLayout,
    Todo,
    TodoContent,
  }
};
</script>