<script setup>
import DefaultTheme   from 'vitepress/theme';
import { useData, useRoute, useRouter } from 'vitepress';
import { computed, watch } from 'vue';
import { sendPageView } from './analytics';

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
        <a v-for="link in footerLinks" :href="link.href" :target="link.blank ? '_blank' : undefined">
          {{ link.label[language.split('-')[0]] || link.label.en }}
        </a>
      </nav>
    </footer>
  </template>
  <!-- <template #sidebar-top>
    <ul class="sidebar-links">
      <li class="sidebar-link">
        <a href="/cs/guide/start" class="sidebar-link-item">Poprvé na herohero</a>
      </li>
      <li class="sidebar-link">
        <a href="/cs/guide/for-creators" class="sidebar-link-item">Tvůrci</a>
        <ul class="sidebar-links">
          <li class="sidebar-link">
            <a href="/cs/guide/for-creators" class="sidebar-link-item">Jak začít</a>
          </li>
           <li class="sidebar-link">
            <a href="/cs/guide/get-subscribers" class="sidebar-link-item">Jak získat odběratele</a>
          </li>
        </ul>
      </li>
    </ul>
  </template> -->
</Layout>
</template>
