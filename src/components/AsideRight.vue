<script setup lang="ts">

</script>

<template>
    <aside>
        <div class="aside-catalog-articles">
            <div class="aside-header">文章分类</div>
            <div class="aside-content">
                <ol>
                    <li>分类1</li>
                    <li>分类2</li>
                </ol>
            </div>
        </div>
    </aside>
</template>

<style scoped>
.aside-catalog-articles {
    width: 300px;
}

.aside-catalog-articles .aside-header {
    background-color: rgb(252, 186, 87);
    padding: 16px;
    font-size: 1.1em;
    font-weight: bold;
    margin: 0 8px 0;
}

.aside-catalog-articles .aside-content{
    background-color: aliceblue;
    margin: 0 8px 0;
    padding: 16px;
}

.aside-catalog-articles .aside-content ol{
    list-style: none;
}

.aside-catalog-articles .aside-content li {
    margin-bottom: 4px;
}

</style>
