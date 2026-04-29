<script setup lang="ts">
import SectionHero from '~/components/SectionHero.vue';

const { t } = useI18n()

</script>

<template>
    <main>
        <SectionHero :title="t('mission_page.section_1.title')" :description="t('mission_page.section_1.description')"
            image="/images/fun-learning.png" image-position="right" />


        <SectionHero :title="t('mission_page.section_2.title')" :description="t('mission_page.section_2.description')"
            image="/images/fun-learning.png" image-position="left" />

        <SectionHero :title="t('mission_page.section_3.title')" :description="t('mission_page.section_3.description')"
            image="/images/mission-for-parent.png" image-position="right" />
    </main>
</template>