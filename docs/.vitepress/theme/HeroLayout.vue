<script setup>
import DefaultTheme from 'vitepress/theme';
import { useData, useRoute, useRouter} from 'vitepress';
import { computed } from 'vue';

const data = useData();
const language = computed(() => data.lang.value);
const router = useRouter();
const pageData = computed(() => router.route.data);
const feedbackLink = computed(() => {
  if (language.value.includes('cs')) {
    return `https://airtable.com/shr6t223A3G1XNqfc?prefill_Stránka=${pageData.value.title}`;
  }

  return `https://airtable.com/shrLoqNku6HTrM4I1?prefill_Page=${pageData.value.title}`;
});

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #page-bottom>
      <small>
      <template v-if="language.includes('cs')">
        Něco tu chybí?
        <a target="_blank" rel="noreferrer noopener" :href="feedbackLink">
          Dejte nám vědět co bychom tu mohli zlepšit
        </a>
      </template>
      <template v-else-if="language.includes('en')">
        Something is missing?
        <a target="_blank" rel="noreferrer noopener" :href="feedbackLink">
          Let us know so we can make it better
        </a>
      </template>
      </small>
    </template>
  </Layout>
</template>
