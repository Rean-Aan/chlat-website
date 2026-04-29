<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { t } = useI18n()
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value)
  }
})

useSeoMeta({
  ogSiteName: t('site_name'),
  ogDescription: t('site_description'),
  ogImage: 'https://yoursite.com/logo.png',
  twitterCard: 'summary_large_image',
})
</script>