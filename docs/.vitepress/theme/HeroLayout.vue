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

const footerLinks = [
  {
    label: {
      en: 'Contact us',
      cs: 'Kontaktujte nás',
    },
    href: 'mailto:info@herohero.co'
  }, {
    label: {
      en: 'Instagram'
    },
    href: 'https://www.instagram.com/herohero.co',
    blank: true,
  }, {
    label: {
      en: 'Twitter'
    },
    href: 'https://twitter.com/heroherocompany',
    blank: true
  }, {
    label: {
      en: 'Join us',
      cs: 'Přidejte se k nám'
    },
    href: 'mailto:info@herohero.co'
  }
];
</script>

<template>
  <Layout>
    <template #page-bottom>
      <footer class="theme">
        <nav>
        </nav>
      </footer>
    </template>
  </Layout>
</template>
