<template>
    <div class="todo-util">
        <div class="input-select">
            <label for="sort" class="sr-only"> 정렬선택 </label>
            <select id="sort" name="sort" @change="onChangeSort">
                <option value="asce">오름차순</option>
                <option value="desc">내림차순</option>
            </select>
        </div>
        <button class="btn-allclear" @click="clearAll"> Clear All </button>
    </div>
</template>
<script>

export default {
    name: 'TodoUtil',
    methods: {
        onChangeSort() {
            window.alert("정렬 변경")
        },
        clearAll() {
            window.alert("전체 지우기")
        }
    }
}
</script>

<style lang="scss">
    .todo-util {
        @include displayFlex($valFlexBetweenCenter...);
        padding: $defaultSpace 0;
    }
</style>