<template>
    <header class="header">
        <h1>My Todo</h1>
        <p class="date">{{ today }}</p>
    </header>
</template>

<script>
    export default {
        name: "TodoHeader",
        data() {
            return {
                today:'4/20 화요일',
            }
        }
    }
</script>w