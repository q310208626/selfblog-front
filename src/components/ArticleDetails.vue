<script setup lang="ts">
import { ref } from 'vue'
import i18nMessage from '@/i18n/i18nMessage';
import HeaderComponent from '@/components/Header.vue'
import AsideLeft from '@/components/AsideLeft.vue'
import AsideRight from '@/components/AsideRight.vue'

const { t } = i18nMessage.global;


let articleHeader = ref('标题');
let articleBody = ref('文章内容');
let usertoken = localStorage.getItem('usertoken')

</script>

<template>
    <HeaderComponent></HeaderComponent>
    <div class="content-container">
        <AsideLeft></AsideLeft>
        <main>
            <div class="content-article">
                <div class="headerbar">
                    <h1>{{ articleHeader }}</h1>
                    <span class="editBtn">编辑</span>
                </div>
                <article>{{ articleBody }}</article>
            </div>
        </main>
        <AsideRight></AsideRight>
    </div>
    <footer>

    </footer>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.content-container {
    padding: 8px 10px 8px;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    min-height: 100%;
}

main .content-article {
    background-color: aliceblue;
    width: 1010px;
    padding: 16px;
    height: 500px;
}

.headerbar{
    margin-bottom: 0.4em;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.editBtn{
    cursor: pointer;
}

.loginbtn a {
    text-decoration: none;
    color: black;
}
</style>