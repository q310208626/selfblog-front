<script>
</script>
<template>
    <aside>
        <div class="aside-new-articles">
            <div class="aside-header">最新文章</div>
            <div class="aside-content">
                <ol>
                    <li>文章1</li>
                    <li>文章2</li>
                </ol>
            </div>
        </div>

        <div class="aside-popular-articles">
            <div class="aside-header">热门文章</div>
            <div class="aside-content">
                <ol>
                    <li>文章1</li>
                    <li>文章2</li>
                </ol>
            </div>
        </div>
    </aside>
</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

aside>div:first-child {
    width: 300px;
    margin-right: 8px;
    margin: 0 8px 16px 8px;
    background-color: aliceblue;
}

aside>div:not(:first-child) {
    width: 300px;
    margin-right: 8px;
    margin: 8px 8px 16px;
    background-color: aliceblue;
}

aside .aside-header {
    padding: 16px;
    background-color: rgb(252, 186, 87);
    font-size: 1.1em;
    font-weight: bold;
}

aside .aside-content {
    padding: 16px;
}

.aside-new-articles ol {
    list-style: none;
}

.aside-new-articles li {
    margin-bottom: 4px;
}

.aside-popular-articles ol {
    list-style: none;
}

.aside-popular-articles li {
    margin-bottom: 4px;
}
</style>