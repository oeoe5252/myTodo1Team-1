<template>
    <div class="form-item">
        <input type="text" placeholder="Enter your task here" v-model="todoData" v-on:keyup.enter="addList()" />
        <button @click="addList" class="btn"><i class="ico-arr"></i>확인</button>
    </div>
</template>

<script>
    import MyTodoList from "@/components/module/MyTodoList.js"

    const myTodo = new MyTodoList();
    export default {
        name: "TodoInput",
        data() {
            return {
                todoData: '',
            }
        },
        methods: {
            addList() {
                if (this.todoData !== '') {
                    //데이터값 전송
                    localStorage.setItem(this.todoData, myTodo.writeMydoList())
                    this.clearInput();
                } else {
                    alert('할일을 입력해주세요.')
                }
            },
            clearInput() {
                this.todoData = '';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-item {
        position: relative;
        padding-bottom: 50px;
        input {
            color: $white;
        }
        .btn {
            font-size: 0;
            width: 30px;
            height: 30px;
            border-radius: 100%;
            position: absolute;
            right: 15px;
            top: 10px;
            background: $white;
            @include displayFlex;

            .ico-arr {
                @include iconArrow(right, 16px, 14px, 1px);
            }
        }
    }
</style>