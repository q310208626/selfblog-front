<script setup lang="ts">
import HeaderComponent from '@/components/Header.vue'
import AsideLeft from '@/components/AsideLeft.vue'
import AsideRight from '@/components/AsideRight.vue'
</script>

<template>
    <HeaderComponent></HeaderComponent>
    <div class="override-contents">
        <AsideLeft></AsideLeft>
        <main>
            <div class="override-articles">
                <div class="certain-article">
                    <span class="certain-article-theme">文章主题</span>
                    <p class="certain-article-preview">内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介</p>
                </div>

                <div class="certain-article">
                    <span class="certain-article-theme">文章主题</span>
                    <p class="certain-article-preview">内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介内容简介</p>
                </div>
            </div>
        </main>
        <AsideRight></AsideRight>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.override-contents {
    padding: 8px 10px 8px;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    min-height: 100%;
}

.override-articles {
    width: 800px;
}

.override-articles .certain-article{
    border-radius: 1px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 1);
    overflow: hidden;
    background-color: aliceblue;
}

.override-articles .certain-article:not(:first-child){
    margin-top: 16px;
}

.override-articles .certain-article .certain-article-theme {
    background-color: rgb(252, 186, 87);
    display: block;
    padding: 8px;
    font-weight: bold;
    font-size: 1.4em;
}

.override-articles .certain-article .certain-article-preview {
    height: 200px;
    padding: 8px;
    font-size: 1.1em;
}
</style>