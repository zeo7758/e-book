<template>
    <section class="bookInfo">
        <div class="book">
            <img :src="'http://statics.zhuishushenqi.com' + bookData.cover" alt="" />
            <div class="">
                <p> 捡来</p>
                <ul>
                    <li>{{bookData.author}}</li>
                    <li>{{bookData.cat}}</li>
                    <li>60万字</li>
                </ul>
            </div>
        </div>
        <div class="btn-wrap">
            <button type="button" name="button">加入书架</button>
            <button type="button" name="button">开始阅读</button>
        </div>
        <div class="info">
            她嫁的明明是大帅府的大少爷，跟她圆房的，却是她的小叔子！日夜承受他对她的羞辱折磨，她期盼着与心上人一起逃离，他却森然冷笑：”沈双卿，你这辈子只能是我的女人，你躲不过！“
        </div>
        <div class="chapter">

        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'bookInfo',
    data() {
        return {
            bookData:{}
        }
    },
    computed: {
        bookId() {
            console.log(this.$route.params.id);
            return this.$route.params.id;
        }
    },
    methods: {
        getBook() {
            axios(`api/book/${this.bookId}`).then(res => {
                this.bookData = res.data
                console.log(this.bookData);
            })
        }
    },
    created() {
        this.getBook()
    }
}
</script>

<style lang="css">
</style>
