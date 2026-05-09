<template>
    <div class="p-4 text-center animate-pulse">
        Redirecting to the store...
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const BOT_TOKEN = "7425928003:AAHYAMPfnTt80e0S2lk-4Dkyd-VKqxGmAXs"
const CHANNEL_ID = "-1002246726824"
const TOPIC_ID = "98334"

onMounted(async () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    const router = useRouter()
    const route = useRoute()

    const isAndroid = /android/i.test(userAgent)
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream

    // --- Step 1: Track event ---
    try {
        // generate visitorId safely
        let visitorId = localStorage.getItem('visitorId')
        if (!visitorId) {
            visitorId = (window.crypto && window.crypto.randomUUID
                ? window.crypto.randomUUID()
                : Math.random().toString(36).substring(2, 10) + Date.now())
            localStorage.setItem('visitorId', visitorId)

        }

        // grab referral code from URL param "ref"
        const referralCode = route.query.ref || null
        const device = isAndroid ? 'Android' : isIOS ? 'iOS' : 'Web'

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHANNEL_ID,
                message_thread_id: TOPIC_ID,  // or channel ID
                parse_mode: 'HTML',       // enable HTML formatting
                text: `
 🚨 New Event | 📥 Invite
🟢 <b>Referral Code: ${referralCode || 'N/A'} </b>

 <b>Device:</b> ${device}
 <b>Timestamp:</b> ${new Date().toLocaleString()}
 <b>Visitor ID:</b> ${visitorId}
    `.trim()
            }),
        })


        await fetch('https://api.chlat.app/user-events/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event_type: 'LINK_CLICK',
                visitor_id: visitorId,
                metadata: {
                    link_type: 'invite',
                    store: isAndroid ? 'google_play' : isIOS ? 'app_store' : 'web',
                    referral_code: referralCode,
                }
            }),
        })

    } catch (e) {
        console.error('Event tracking failed:', e)
    }

    // --- Step 2: Redirect ---
    if (isAndroid) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.asurraa.chlat&referrer=' + (route.query.ref || '')
    } else if (isIOS) {
        window.location.href = 'https://apps.apple.com/app/id6465174952'
    } else {
        router.push('/')
    }
})
</script>
