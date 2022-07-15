<script setup>
import DefaultTheme from 'vitepress/theme';
import { useData, useRoute, useRouter } from 'vitepress';
import { computed, watch, ref } from 'vue';
import { sendPageView } from './analytics';
import { string_to_slug } from '../../../scripts/utils.mjs';
import { useTask, timeout } from 'vue-concurrency';

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

const emailAddress = ref('');
const subscribeTask = useTask(function* (signal) {
  const email = document.querySelector('.sabskrajb input').value;
  yield timeout(1000);
  const response = yield fetch('/.netlify/functions/add-subscriber', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email
    })
  });

  const json = yield response.json();

  if (!response.ok) {
    throw json
  }

  emailAddress.value = email;
});

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
      <section class="sabskrajb">
        <div v-if="subscribeTask.last && emailAddress.length" style="margin-bottom: -1rem;">
          Thank you! Confirmation email was sent to <strong>{{ emailAddress }}</strong>.
        </div>
        <template v-else>
          <div class="left">
            <div style="display: flex; align-items:center;">
              <font size="6">✉️</font>&nbsp;Subscribe to my automation newsletter
            </div>
          </div>
          <div class="right">


            <input :disabled="subscribeTask.isRunning" inputmode="email" type="email" placeholder="Email address">
            <button :disabled="subscribeTask.isRunning" @click="() => subscribeTask.perform()" type="button">
              <template v-if="subscribeTask.isRunning">
                Sending...
              </template>
              <template v-else>
                Subscribe
              </template>
            </button>
          </div>
          <small v-if="subscribeTask.isError" class="error" style="display:block;margin-bottom: 1rem">
            {{ subscribeTask.last?.error }}
          </small>
        </template>
      </section>
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
