<template>
    <footer class="footer">
        <h6>
            <span>Footer</span>
        </h6>
    </footer>
</template>
<script>
export default {
    name: 'TodoFooter',
}
</script>
<style lang="scss">
    .footer {
        @include displayFlex($valFlexCenter...);
        color: #ccc;
        padding-top: $defaultSpace * 4;
        padding-bottom: $defaultSpace * 2;
    }
</style>