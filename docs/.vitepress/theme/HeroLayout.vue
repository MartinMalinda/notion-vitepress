<script setup>
import DefaultTheme from 'vitepress/theme';
import { useData, useRoute, useRouter } from 'vitepress';
import { computed, watch } from 'vue';
import { sendPageView } from './analytics';
import { string_to_slug } from '../../../scripts/utils.mjs';

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


// Only run this on the client. Not during build.
if (typeof window !== 'undefined') {
  watch(() => router.route.data.relativePath, () => {
    const className = string_to_slug(router.route.data.title);
    document.body.className = className;
    sendPageView();
  }, { immediate: true });
}

const { Layout } = DefaultTheme;

</script>

<template>
  <Layout>
    <template #page-top>
      <div class="wip-line">
        This knowledge base is a work in progress. I'm continuously improving it.
      </div>
    </template>
    <template #page-bottom>
      <footer class="theme">
        <nav>
          Built with Vitepress and sourced in Notion. Contact me at <a
            href="https://www.linkedin.com/in/martin-malinda-58b03253/">LinkedIn</a> | <a
            href="mailto:malindacz@gmail.com">malindacz@gmail.com</a>.
        </nav>
      </footer>
    </template>
  </Layout>
</template>
