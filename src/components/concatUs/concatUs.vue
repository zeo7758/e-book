<template>
    <section class="concatUs">
        <div class="cm-middle wrap">
            <h3>联系我们</h3>
            <p>qq：123456</p>
            <p>github：123456@qq.com</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'concatUs',

}
</script>

<style lang="styl">
@import '../../stylesheets/ui.styl';
.concatUs
    position absolute
    top 0
    bottom 0
    width 100%
    background $clr-white
    .wrap
        width 100%
        text-align center
</style>
