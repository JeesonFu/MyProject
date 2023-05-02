<template>
    <div class="main">
        <div class="panel">
            <router-view v-slot="{ Component }">
                <transition name="el-fade-in-linear" mode="out-in" class="transition">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
        <div class="footer1">
            <div class="board" onclick="window.open('https://space.bilibili.com/8339095')">
                <el-image style="width: 60px;height: 60px" src="src/assets/icon/ic_bilibili.png"/>
                <span>冷尐风Jeeson</span>
                <el-divider direction="vertical" style="height: 45px"/>
                <el-icon><ArrowRight /></el-icon>
            </div>
            <div class="board" onclick="window.location.href = 'tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=442885735&website=www.oicqzone.com'">
                <el-image style="width: 60px;height: 60px" src="src/assets/icon/ic_qq.png"/>
                <span>442885735</span>
                <el-divider direction="vertical" style="height: 45px"/>
                <el-icon><ArrowRight /></el-icon>
            </div>
        </div>
        <div class="footer2">网页设计：冷尐风Jeeson</div>
        <div class="footer3">问题反馈：JeesonTools@qq.com</div>
    </div>
</template>

<script setup>

import router from "@/router";
import {ArrowRight} from "@element-plus/icons-vue";

router.push('/login')

</script>

<style scoped>
@import "@/assets/css/welcome-layout.css";
</style>