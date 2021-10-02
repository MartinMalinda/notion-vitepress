<script setup>
import DefaultTheme from 'vitepress/theme';
import { useData, useRoute } from 'vitepress'

const { Layout } = DefaultTheme

const foo = useData();
console.log({ foo });
</script>

<template>
  <Layout>
    <template #page-top>
    </template>
  </Layout>
</template>
