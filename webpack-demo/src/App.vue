<template>
    <div>hello webpack</div>
    <h1>{{ name }}</h1>
</template>

<script setup lang="ts">
import '@/assets/index.less'
import {ref,reactive} from 'vue'
const name = ref<string>('元渊')
</script>
<style scoped></style>