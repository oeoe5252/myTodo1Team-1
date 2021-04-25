<template>
    <div class="input-check type1">
        <input 
            :id="id"
            :name="name"
            type="checkbox"
            :checked="item.isComplete"
            @change="onChangeChecked" />
        <label 
            :for="id"
            class="label-legend"
            :class="[{done: item.isComplete}]"> 
            <span>{{msg}}</span> </label>
    </div>
</template>
<script>
export default {
    name: 'TodoCheck',
    props: {
        msg: {
            type: String,
        },
        id: {
            type: String,
        },
        name: {
            type: String,
        },
        item: {
            type: Object
        }
    },
    methods: {
        onChangeChecked: function(e) {
            if( e.target.checked ) {
                // state 상태 변경 필요
                window.alert("checked true")
            }else {
                // state 상태 변경 필요
                window.alert("checked false")
            }
        }
    }
}
</script>

<style lang="scss">
    .input-check {
        &.type1 {
            position: relative;
            padding-left: 35px;
            .label-legend {
                font-size: 1rem;
                line-height: 1.5rem;
                margin-bottom: 0.5em;
                 &.done {
                    span {
                        color: $grayC;
                        text-decoration: line-through;
                    }
                }
                &:before,
                &:after {
                    @include pseudoBase();
                    top: 0;
                    left: 0;
                    margin: auto;
                }
                &:before {
                    @include itemSize(24px, 24px);
                    background-color: $white;
                    border: 1px solid $grayC;
                    transition: all .15s;
                }
                &:after {
                    content:"끝";
                    opacity: 0;
                    transition: all .15s;
                    width: 24px;
                    height: 24px;
                    text-align: center;
                    font-size: 10px;
                    color: #ccc;
                }
            }
            :checked + label {
                &:after {
                    opacity: 1;
                }
            }
        }
        
    }
</style>