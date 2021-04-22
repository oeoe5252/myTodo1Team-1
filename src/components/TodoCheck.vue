<template>
    <div class="input-check type1">
        <input 
            :id="id"
            type="checkbox"
            :name="name" />
        <label 
            :for="id"
            class="label-legend"> 
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