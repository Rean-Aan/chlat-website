<script setup lang="ts">
import { useI18n } from '#i18n'
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const LOCALES = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'km', name: 'ខ្មែរ', flag: '🇰🇭' },
] as const

const open = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const currentLocale = computed(
    () => LOCALES.find(l => l.code === locale.value) ?? LOCALES[0]
)

function handleOutsideClick(e: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
        open.value = false
    }
}

onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleOutsideClick))
</script>

<template>
    <header class="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')">
            <img src="/logo.png" alt="Logo" class="w-10 h-10 object-contain" />
        </NuxtLink>

        <!-- Nav -->
        <nav class="flex items-center gap-4">
            <!-- Get the app button -->
            <NuxtLink :to="localePath('/') + '#get-the-app'">
                <p class="bg-[#0388D3] text-white px-4 py-2 rounded-xl">
                    {{ $t('home_page.get_the_app') }}
                </p>
            </NuxtLink>
            <!-- Language Switcher -->
            <div class="relative" ref="dropdownRef">
                <button @click="open = !open"
                    class="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium">
                    <span>{{ currentLocale.flag }}</span>
                    <span>{{ currentLocale.name }}</span>
                    <svg class="w-3.5 h-3.5 text-gray-400 transition-transform duration-200"
                        :class="{ 'rotate-180': open }" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <Transition enter-active-class="transition duration-150 ease-out"
                    enter-from-class="opacity-0 scale-95 -translate-y-1"
                    enter-to-class="opacity-100 scale-100 translate-y-0"
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100 translate-y-0"
                    leave-to-class="opacity-0 scale-95 -translate-y-1">
                    <div v-if="open"
                        class="absolute right-0 mt-1.5 w-36 rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden z-50">
                        <button v-for="loc in LOCALES" :key="loc.code" @click="setLocale(loc.code)"
                            class="flex items-center gap-2.5 w-full px-3 py-2 text-sm hover:bg-gray-50 transition-colors"
                            :class="{ 'bg-gray-50 font-semibold': locale === loc.code }">
                            <span>{{ loc.flag }}</span>
                            <span class="font-en">{{ loc.name }}</span>
                        </button>
                    </div>
                </Transition>
            </div>
        </nav>
    </header>
</template>