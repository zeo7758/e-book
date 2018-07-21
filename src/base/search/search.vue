<template>
  <section class="search cm-rel cm-flex">
    <i class='search-icon'></i>
        <input type="text" :placeholder="placeholder" v-model="keyWord">
    <button type="button" class="btn" @click='search'>搜索</button>
  </section>
</template>

<script>
export default {
    name: 'search',
    data() {
        return {
            keyWord: '',
        }
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        }
    },
    methods: {
        search() {
            if(!this.keyWord) return
            this.$emit('search', this.keyWord)
        },
    }
}
</script>

<style lang="styl">
@import '../../stylesheets/ui.styl';
.search
    width 100%
    font-size 0
    input
        height 32px
        display inline-block
        background $bgc-gray-6
        padding-left 42px
        line-height 32px
        font-size $font-12
        width 85%
    .search-icon
        width 20px
        height 20px
        display inline-block
        position absolute
        top: 6px;
        left: 7px;
        background url(./search.png) no-repeat
        background-size 100% 100%
    .btn
        height: 32px;
        display: inline-block;
        font-size $font-12
        background $bgc-blue-1
        color $clr-white
        display inline-block
        text-align center
        width 15%
</style>
