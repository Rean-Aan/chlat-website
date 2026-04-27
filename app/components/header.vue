<template>
    <header class="flex justify-between items-center p-5 bg-white border border-gray border-bottom">
        <!-- logo -->
        <img src="/logo.png" alt="" srcset="" class="w-10">

        <div class="flex space-x-8 items-center">
            <p>{{ $t('about_us') }}</p>

            <!-- Language Switcher -->
            <div class="relative" ref="dropdownRef">
                <button @click="open = !open"
                    class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 text-sm font-medium">
                    <span class="text-base leading-none">{{ currentLocale.flag }}</span>
                    <span>{{ currentLocale.name }}</span>
                    <svg class="w-3.5 h-3.5 opacity-60 transition-transform duration-200"
                        :class="{ 'rotate-180': open }" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <!-- Dropdown -->
                <Transition enter-active-class="transition duration-150 ease-out"
                    enter-from-class="opacity-0 scale-95 -translate-y-1"
                    enter-to-class="opacity-100 scale-100 translate-y-0"
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100 translate-y-0"
                    leave-to-class="opacity-0 scale-95 -translate-y-1">
                    <div v-if="open"
                        class="absolute right-0 mt-1.5 w-36 rounded-xl border border-gray bg-white shadow-xl overflow-hidden z-50">
                        <button v-for="loc in locales" :key="loc.code" @click="selectLocale(loc.code)"
                            class="flex items-center gap-2.5 w-full px-3 py-2 text-sm hover:bg-white/20 transition-colors duration-150"
                            :class="{ 'bg-white/15 font-semibold': locale === loc.code }">
                            <span class="text-base">{{ loc.flag }}</span>
                            <span>{{ loc.name }}</span>
                        </button>
                    </div>
                </Transition>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const locales = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'km', name: 'ខ្មែរ', flag: '🇰🇭' },
    // add more as needed
]

const open = ref(false)
const dropdownRef = ref(null)

const currentLocale = computed(
    () => locales.find(l => l.code === locale.value) ?? locales[0]
)

function selectLocale(code) {
    locale.value = code
    open.value = false
}

// Close on outside click
function handleOutsideClick(e) {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
        open.value = false
    }
}

onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleOutsideClick))
</script>