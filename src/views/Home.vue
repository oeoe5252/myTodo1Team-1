<template>
  <default-layout>
    <Todo />
    <TodoContent />
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import Todo from '@/components/Todo'
import TodoContent from '@/components/TodoContent'
import { mapState } from 'vuex'

export default {
    name: 'App',
    components: {
        DefaultLayout,
        Todo,
        TodoContent,
    },
    computed : mapState({
        writeLists: state => state.writeList
    }),
    /*
    created(){
        this.$store.dispatch('getAllWriteList')
    },
    */
};
</script>