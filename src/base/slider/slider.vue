<template>
    <section class='slider'>
        <div class="bar" ref = 'bar'>
        </div>
        <div class="btn" ref = 'btn' @touchstart = 'touchstartEvt' @touchmove='touchmoveEvt'>
        </div>
    </section>
</template>

<script>
export default {
    name: 'slider',
    methods: {
        touchstartEvt(e) {
            // console.log(e);
            this.startX = e.touches[0].pageX;
        },
        touchmoveEvt(e) {
            // console.log(e)
            let pX = this.$refs.bar.style.left;
            console.log(pX);
            let x = 0;
            this.endX = e.touches[0].pageX
            this.$refs.btn.style.left = this.endX - this.startX + x +'px';
            x = this.endX
        }

    }
}
</script>

<style lang="styl">
@import '../../stylesheets/ui.styl';

.slider
    width 100%
    position relative
    .bar
        background $bgc-white-1
        width 100%
        height 10px
        border-radius 10px
    .btn
        position absolute
        width 20px
        height 20px
        border-radius 50%
        background $clr-white
        border 4px solid $bgc-blue-1
        top -4px
</style>
