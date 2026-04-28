<script setup lang="ts">
import Footer from '~/components/footer.vue';
import Header from '~/components/header.vue';
import SectionHero from '~/components/SectionHero.vue';

const { t } = useI18n()

</script>

<template>
    <Header class="sticky top-0 z-50" />

    <main>
        <SectionHero :title="t('homepage.hero.title')" :description="t('homepage.hero.description')"
            image="/images/fun-learning.png" image-position="right" />

        <SectionHero :title="t('homepage.watch.title')" :description="t('homepage.watch.description')"
            image="/images/watch-feature.png" image-position="left" />

        <SectionHero :title="t('homepage.learn.title')" :description="t('homepage.learn.description')"
            image="/images/learn-feature.png" image-position="right" />

        <SectionHero :title="t('homepage.play.title')" :description="t('homepage.play.description')"
            image="/images/play-feature.png" image-position="left" />

        <SectionHero :title="t('homepage.parental_dashboard.title')"
            :description="t('homepage.parental_dashboard.description')" image="/images/parental-dashboard-feature.png"
            image-position="right" />
    </main>

    <Footer />
</template>
