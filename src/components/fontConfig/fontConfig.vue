<template>
    <section class="fontConfig">
        <div class="sldier-wrap">
            <slider/>
        </div>

    </section>
</template>
<script>
import slider from '../../base/slider/slider'
export default {
    name: 'fontConfig',
    components:{
        slider
    }
}
</script>

<style lang="styl">
@import '../../stylesheets/ui.styl';
.fontConfig
    position absolute
    top 0
    bottom 0
    width 100%
    background $bgc-gray-2
    .sldier-wrap
        /*padding-top 30%*/
        padding 30% 36px
</style>
