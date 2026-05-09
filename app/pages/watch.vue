<script setup lang="ts">
function openApp() {
  window.location.href = v ? `https://chlat.app/watch?p=${p}&v=${v}` : `https://chlat.app/watch?p=${p}`;
}

const route = useRoute();
const p = route.query.p;
const v = route.query.v;

const url = v
  ? `https://api.chlat.app/playlist/one/meta/${p}?video_id=${v}`
  : `https://api.chlat.app/playlist/one/meta/${p}`;

const playlist = await fetch(url).then(res => res.json()).then(data => data.data);

useServerSeoMeta({
  ogTitle: () => playlist.title,
  title: () => playlist.title,
  description: () => playlist.description,
  ogDescription: () => playlist.description || 'ចុចទីនេះដើម្បីចូលទៅទស្សនាវីដេអូនេះ',
  ogImage: () => getFullImageUrl(playlist.thumbnail),
  ogImageUrl: () => getFullImageUrl(playlist.thumbnail),
  ogType: () => 'video.other',
  ogUrl: () => v ? `https://chlat.app/watch?p=${p}&v=${v}` : `https://chlat.app/watch?p=${p}`,
  ogSiteName: () => 'Chlat',
  fbAppId: () => '984980123114339',
  twitterCard: () => 'summary_large_image',
  twitterTitle: () => playlist.title,
  twitterDescription: () => playlist.description || 'ចុចទីនេះដើម្បីចូលទៅទស្សនាវីដេអូនេះ',
  twitterImage: () => getFullImageUrl(playlist.thumbnail),
  appleItunesApp: () => 'app-id=6465174952',
})

useHead({
  meta: [

    { property: "al:ios:url", content: v ? `https://chlat.app/watch?p=${p}&v=${v}` : `https://chlat.app/watch?p=${p}` },
    { property: "al:ios:app_store_id", content: "6465174952" },
    { property: "al:ios:app_name", content: "Chlat: Learn, Play, Create" },

    { property: "al:android:url", content: v ? `https://chlat.app/watch?p=${p}&v=${v}` : `https://chlat.app/watch?p=${p}`, },
    { property: "al:android:package", content: "com.asurraa.chlat" },
    { property: "al:android:app_name", content: "Chlat" },
  ]
});

function getFullImageUrl(image: string) {
  if (!image) return 'https://example.com/default-thumbnail.jpg'; // Fallback image
  return image.startsWith('http') ? image : `https://api.chlat.app/upload/image/${image}`;
}

onMounted(() => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera

  const router = useRouter()

  const isAndroid = /android/i.test(userAgent)
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream

  if (isAndroid) {
    // Redirect to Google Play Store
    window.location.href = 'https://play.google.com/store/apps/details?id=com.asurraa.chlat'
  } else if (isIOS) {
    // Redirect to Apple App Store
    window.location.href = 'https://apps.apple.com/app/id6465174952'
  } else {
    // Optional: fallback or show a message
    router.push('/')
  }
})
</script>
