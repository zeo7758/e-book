<template>
  <article class="bookStage">
    <ul class='stage-wrap cm-w100'>
        <li class='list-item'>
            <img src="./book.jpg" alt="" />
            <p class='bookName'>
                书名
            </p>
            <p class='editorName'>
                作者名
            </p>
        </li>
        <li class='list-item'>
            <img src="./book.jpg" alt="" />
            <p class='bookName'>
                书名
            </p>
            <p class='editorName'>
                作者名
            </p>
        </li>
        <li class='list-item'>
            <img src="./book.jpg" alt="" />
            <p class='bookName cm-elis'>
                书名书名书名书名书名
            </p>
            <p class='editorName cm-elis'>
                作者名书名书名书名书名
            </p>
        </li>
        <li class='list-item'>
            <img src="./book.jpg" alt="" />
            <p class='bookName'>
                书名
            </p>
            <p class='editorName'>
                作者名
            </p>
        </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'bookStage'
}
</script>

<style lang="styl">
@import '../../stylesheets/ui.styl';
    .bookStage
        top 0
        bottom 0
        width 100%
        position absolute
        overflow scroll
        .stage-wrap
            padding 18px
            display flex
            justify-content space-between
            flex-wrap wrap
            .list-item
                width 30%
                padding 20px 4px
                .bookName
                    font-size $font-16
                .editorName
                    font-size $font-12
</style>
