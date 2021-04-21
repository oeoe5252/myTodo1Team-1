<template>
    <section class="section-todo">
        <TodoHeader/>
        <TodoIntro/>
        <TodoInput/>
    </section>
</template>

<script>
    import TodoHeader from "@/components/TodoHeader";
    import TodoIntro from "@/components/TodoIntro";
    import TodoInput from "@/components/TodoInput";

    export default ({
        name: 'Todo',
        components: {
            TodoHeader,
            TodoIntro,
            TodoInput,
        }
    })
</script>

<style lang="scss" scoped>
    .section-todo {
        position: relative;
        height: 50vh;
        padding: 0 40px;
        background: url('~@/assets/images/bg-morning.jpg') no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>