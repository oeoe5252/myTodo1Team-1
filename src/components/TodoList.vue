<template>
    <ul class="todo-list">
        <li v-for="(item, index) of StateItems" :key="index">
            <BaseCheck :name="`id-${item.writeDate}`" :id="`id-${item.writeDate}`" :msg="item.content" :item="item"></BaseCheck>
            <div class="util-wrap">
              <button class="btn-del" @click="clearItem(item.writeDate)"></button>
              <span class="item-date">
                {{item.writeDate}}
              </span>
            </div>
        </li>
    </ul>
</template>
<script>
import BaseCheck from '@/components/TodoCheck.vue'
import { mapState } from 'vuex'

export default {
    name: 'TodoList',
    components: {
        BaseCheck,
    },
    computed: {
        ...mapState({
            StateItems: 'writeList'
        }),
    },
    methods: {
      clearItem(val) {
        window.alert( `${val} 삭제` )
      },
      changeFormat(val) {
        console.log("===", val)
      }
    },
}
</script>

<style lang="scss">
    .todo-list {
        li {
            @include displayFlex($valFlexBetweenStart...);
            position: relative;
            background-color: $white;
            border-radius: 5px;
            margin-bottom: 10px;
            @include box-shadow($defaultShadow2...);
            padding: 1rem;

            .util-wrap {
              color: $gray9;
              margin-left: 10px;
            }
        }
        .btn-del {
          position: relative;
           @include icon-x();
        }
        .item-date {
          position: absolute;
          bottom: 0.5rem;
          right: 1rem;
          font-size: 0.5rem;
        }
    }
</style>