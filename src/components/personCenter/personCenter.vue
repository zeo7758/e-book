<template>
  <article class="personCenter">
    <router-view class="router"></router-view>
    <div class="head-wrap" @click=' goLogin '>
      <div class="head">
        <img src="./head.png" alt="" />
      </div>
      <p class='username'>
          {{username}}
      </p>
    </div>
    <div class="menuList ">
        <ul>
            <li class='menu' v-for=" menu in catalog " @click='menuClick(menu)'>
                <span class="menu-name">{{menu.name}}</span>
                <span class="cm-right-btn"></span>
            </li>
        </ul>
    </div>
  </article>
</template>

<script>
import { catalog } from '../../config/personCenter';
export default {
    name: 'personCenter',
    data(){
        return {
            catalog: catalog,

        }
    },
    props:{
        username:{
            type: String,
            default: '请输入用户名'
        }
    },
    methods: {
        goLogin() {
            this.$router.push({
                path: '/login'
            })
        },
        menuClick(menu) {
            this.$router.push({
                path: menu.router
            })
        }
    }
}
</script>
<style lang="styl">
.router
    position absolute
    top 0
    bottom 0
    width 100%
    z-index 20
.head-wrap
    padding 40px
    background #c8e0f5
    .head
        width 25%
        border-radius 50%
        overflow hidden
        margin 0 auto
    .username
        margin-top 10px
        text-align center
.menuList
    .menu
        height 36px
        line-height 36px
        border-bottom 1px solid #d0d0d0
        padding 0 18px
        display flex
        justify-content space-between
        flex-flow row nowrap
        align-items center
        .menu-name
            flex 1
        .cm-right-btn
            width 8px
            height 8px
            border-top 1px solid #000
            border-right 1px solid #000

</style>
