<script setup lang="ts">
import Header from '~/components/header.vue';
import Footer from '~/components/footer.vue';

</script>

<template>
    <Header class="sticky top-0 z-50" />
    <main>
        <slot />
    </main>
    <Footer />
</template>