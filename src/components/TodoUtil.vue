<template>
    <div class="todo-util">
        <div class="input-select">
            <label for="sort" class="sr-only"> 정렬선택 </label>
            <select id="sort" name="sort" @change="onChangeSort" v-model="sort">
                <option value="asc">오름차순</option>
                <option value="desc">내림차순</option>
            </select>
        </div>
        <button class="btn-allclear" @click="clearAll"> Clear All </button>
    </div>
</template>
<script>

export default {
    name: 'TodoUtil',
    data(){
          return{
            sort : this.$store.getters.getSort
          }
    },
    methods: {
        onChangeSort() {
             this.$store.dispatch('updateSort',this.sort)
        },
        clearAll() {
           this.$store.dispatch('removeAllList')
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