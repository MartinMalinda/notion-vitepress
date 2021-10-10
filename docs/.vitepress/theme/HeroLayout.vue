<script setup>
import DefaultTheme from 'vitepress/theme';
import { useData, useRoute, useRouter} from 'vitepress';
import { computed, watch } from 'vue';

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
if (typeof window !== 'undefined' && window.ga) {
  watch(() => router.route.data.relativePath, (path) => {
      ga('send', 'pageview', path);
  }, { immediate: true });
}

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #page-bottom>
      <small style="max-width: calc(100% - 100px); display: block; line-height: 1.5; margin-top: -90px;">
      <template v-if="language.includes('cs')">
        Něco tu chybí? <br />
        <a target="_blank" rel="noreferrer noopener" :href="feedbackLink">
          Dejte nám vědět co bychom tu mohli zlepšit
        </a>
      </template>
      <template v-else-if="language.includes('en')">
        Something is missing? <br />
        <a target="_blank" rel="noreferrer noopener" :href="feedbackLink">
          Let us know so we can make it better
        </a>
      </template>
      </small>
      <footer class="theme">
    © Herohero
    <nav>
      <a href="mailto:info@herohero.co">
        Contact Us
      </a>
      <a rel="noopener" target="_blank" href="https://www.instagram.com/herohero.co/">
        Instagram
      </a>
      <a rel="noopener" target="_blank" href="https://twitter.com/heroherocompany">
        Twitter
      </a>
      <a href="mailto:info@herohero.co">
        Join Us</a>
      </nav>
  </footer>
    </template>
  </Layout>
</template>
