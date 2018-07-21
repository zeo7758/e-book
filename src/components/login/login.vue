<template>
<section class="login">
    <div class="register" @click='register'>
        注册
    </div>
    <div class="wrapper">
        <div class="tagwrap name">
            <span class='tag'>昵称</span>
            <input type="text" v-model="name" placeholder="请输入名称">
        </div>
        <div class="tagwrap password">
            <span class='tag'>密码</span>
            <input type="text" v-model="password" placeholder="请输入密码">
        </div>
        <!-- 注册的时候出现 -->
        <!-- <div class="tagwrap">
            <span class='tag'>确认密码</span>
            <input type="button" name="name" value="">
        </div> -->
        <div class="btn-wrap">
            <!-- <button type="button" class="cm-btn cancel">取消</button> -->
            <button type="button" class="cm-btn ensure" @click='ensure'>确认</button>
        </div>
        <p class='noPass'>忘记密码？</p>
    </div>
</section>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        register() {

        },
        ensure() {
            
        }
    }
}
</script>

<style lang="styl">
@import '../../stylesheets/ui.styl';

.login
    width 100%
    position absolute
    bottom 0
    top 0
    z-index 40
    .register
        color $bgc-blue-1
        position absolute
        right 10px
        display inline-block
        top 10px
    .wrapper
        padding-top 10%
        .tagwrap
            text-align center
            padding 0 18px
            margin-bottom 20px
            display flex
            /*justify-content center*/
            border-bottom 1px solid $bgc-gray-5
            input
                width 45%
                height 30px
            .tag
                margin-right 20px
                height 30px
                line-height 30px
                display inline-block
            .cancel
                background $bgc-gray-6
                border 1px solid $bgc-gray-5
        .btn-wrap
            text-align center
            .ensure
                width 80%
                background $bgc-blue-1
                color $clr-white
                margin 0 auto
        .noPass
            text-align center
            margin-top 10px
            font-size $font-12


</style>
