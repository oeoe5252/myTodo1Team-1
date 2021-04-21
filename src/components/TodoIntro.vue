<template>
    <div class="intro">
        <p class="title">{{ hello }}, Kaylee</p>
        <p class="todo-task">
            You've got
            <span class="task-count"><em class="focus">{{ taskCount }}</em>/{{ taskTotal }}</span>
            tasks today!
        </p>
    </div>
</template>

<script>
    export default {
        name: "TodoIntro",
        data() {
            return {
                hello: 'Good Morning',
                taskCount: 2,
                taskTotal: 4,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .intro {
        color: #fff;
        font-size: 1.3em;
        line-height: 1.5em;
        .todo-task {
            font-size:1.5em;
            line-height:1.5em;
            padding:40px 0;
        }
        .task-count {
            display:block;
            line-height:1.5em;
            letter-spacing: 0.2em;
            margin-top:10px;
            .focus {
                font-weight: 600;
                font-size:1.5em;
            }
        }
    }
</style>