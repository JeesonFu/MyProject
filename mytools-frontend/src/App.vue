<script setup>
import {useStore} from "@/stores";
import NetErrorPage from "@/components/error/NetErrorPage.vue";
import NotFoundPage from "@/components/error/NotFoundPage.vue";

const store = useStore()
</script>

<template>
    <router-view v-if="store.net.status && !store.net.notFound"/>

    <net-error-page v-if="!store.net.status"/>

    <not-found-page v-if="store.net.notFound"/>
</template>

<style scoped>

</style>
