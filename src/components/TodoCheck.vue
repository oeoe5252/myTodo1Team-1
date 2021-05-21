<template>
    <div class="input-check type1">
        <input
                :id="id"
                :name="name"
                type="checkbox"
                :checked="item.isComplete"
                @change="onChangeChecked"/>
        <lable
                :for="id"
                class="label-box"
                :class="[{done: item.isComplete}]"></lable>
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
            onChangeChecked: function (e) {
                let payload = {
                      key: this.item.writeDate
                }
                if (e.target.checked) {
                    payload.val = true;
                } else {
                    payload.val = false;
                }
                this.$store.dispatch('updateList', payload)
            }
        }
    }
</script>

<style lang="scss">
    .input-check {
        &.type1 {
            position: relative;
            padding-left: 35px;

            .label-box {
                position: absolute;
                left: 0;
                top: 0;
                @include itemSize(24px, 24px);
                background-color: $white;
                border: 1px solid $grayC;

                &:before,
                &:after {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 1px;
                    background: #fff;
                    border-radius: 15px;
                    @include prefix(transform-origin, left, webkit);
                    @include prefix(transition, all 150ms, webkit);
                }

                &:before {
                    @include prefix(transform, translate(5px, 10px) rotate(45deg), webkit);
                    @include prefix(transition-delay, 100ms, webkit);
                    width: 7px;
                }

                &:after {
                    @include prefix(transform, translate(9px, 15px) rotate(-45deg), webkit);
                    @include prefix(transition-delay, 0ms, webkit);
                    width: 13px;
                }
            }

            input:checked ~ .label-box:before,
            input:checked ~ .label-box:after {
                background: #000;
            }

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
            }

        }

    }
</style>