<template>
  <article class="bookRank">
    <div class="search-wrap">
        <search :placeholder='placeholder' @search='searchEvt'/>
    </div>
    <!-- 搜索历史 -->
    <div class="search-history">
        <p class='cm-title'>
            搜索历史
        </p>
        <ul class='his-list'>
            <li>大主宰</li>
            <li>捡来</li>
        </ul>
    </div>
    <div class="search-list">
        <p class='cm-title'>
            搜索列表
        </p>
        <ul class="booklist" >
            <li class='list-item' @click='selectBook(item)' v-for="item in searchList">
                <div class="headImg">
                    <img :src="'http://statics.zhuishushenqi.com' + item.cover" />
                </div>
                <div class="infos">
                    <p class="name">
                        {{item.title}}
                    </p>
                    <p class="editor">
                        {{item.author}}
                    </p>
                    <p class="graph">
                        {{item.shortIntro}}
                    </p>
                    <div class="tip">
                        <span>{{item.latelyFollower}}</span>人气
                    </div>
                </div>
            </li>
        </ul>
    </div>
  </article>
</template>

<script>
import search from '../../base/search/search';
import axios from 'axios';
const placeholder = '搜索'
export default {
  name: 'bookRank',
  data() {
      return{
          placeholder,
          searchList: []
      }
  },
  components:{
      search
  },
  methods: {
      searchEvt(query) {
        this.searchKey(query)
      },
      selectBook(book) {
          let id = book._id;
          this.$router.push({
              path: `/bookInfo/${id}`
          })
      },
      searchKey(query) {
          //   query:关键词 start:结果开始位置  limit:结果最大数量
          let url = `/api/book/fuzzy-search?query=${query}&start=0&limit=5`
          axios.get(url).then(res => {
              console.log(res.data);
              this.searchList = res.data.books;
          })
      }
  }
}
</script>

<style lang="styl">
@import '../../stylesheets/ui.styl';
.bookRank
    .search-wrap
        width 80%
        margin 0 auto
        padding-top 20px
    .search-history
        margin 16px 18px 0
        .his-list
            font-size 0
            li
                display inline-block
                padding 6px 4px
                font-size $font-12
                margin-right 8px
                border 1px solid $bgc-gray-5
                border-radius 4px
    .search-list
        border-top 1px solid $bgc-gray-5
        margin 16px 18px 0
        .booklist
            margin-top 14px
            .list-item
                display flex
                margin-bottom 20px
                .headImg
                    width 20%
                .infos
                    width: 78%;
                    margin-left 2%
                    font-size $font-12
                    .name
                        font-weight bold
                        font-size $font-16
                    .editor
                        margin 4px 0
                    .graph
                        display -webkit-box
                        -webkit-line-clamp 2
                        -webkit-box-orient vertical
                        word-break break-all
                        overflow hidden
                        text-overflow ellipsis
                    .tip
                        margin-top 4px
                        span
                            color red


</style>
