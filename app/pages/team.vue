<script setup>
import member1 from '~/assets/images/team_member_1.jpg'
import member2 from '~/assets/images/team_member_2.jpg'
import member3 from '~/assets/images/team_member_3.jpg'
import member4 from '~/assets/images/team_member_4.jpg'
import member5 from '~/assets/images/team_member_5.jpg'
import member6 from '~/assets/images/team_member_6.png'
import member7 from '~/assets/images/team_member_7.jpg'
import member8 from '~/assets/images/team_member_8.jpg'
import member9 from '~/assets/images/team_member_9.jpg'
import member10 from '~/assets/images/team_member_10.jpg'

const { t } = useI18n()
</script>

<template>
    <section class="h-screen flex items-center justify-center bg-white">
        <div class="mx-auto space-y-4">
            <div class="flex flex-col gap-4 justify-center items-center text-center max-w-2xl mx-auto">
                <h1 class="text-4xl lg:text-[48px] text-primary font-bold leading-tight">
                    {{ t('team_page.title') }}
                </h1>
                <p class="mt-4 text-xl lg:text-[24px] text-gray-600 font-thin">
                    {{ t('team_page.description') }}
                </p>

                <img src="/images/meet_our_team_2.png" alt="chlat-logo" class="h-96 w-auto object-contain"
                    draggable="false">
            </div>
        </div>
    </section>
    <div class="p-8">
        <h1 class="text-4xl lg:text-[48px] text-primary font-bold leading-tight text-center">
            {{ t('team_page.founders') }}
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <TeamMemberCard name="Soflita Seth" role="Co-Founder & Operations Lead" :image="member1" />
            <TeamMemberCard name="Dany Chhe" role="Co-Founder, Partnerships & Content Lead" :image="member2" />
            <TeamMemberCard name="Panha You" role="Co-Founder & Tech Lead" :image="member3" />
        </div>
    </div>
    <div class="p-8">
        <h1 class="text-4xl lg:text-[48px] text-primary font-bold leading-tight text-center">
            {{ t('team_page.development') }}
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <TeamMemberCard name="Kimhour Seak" role="Software Engineer" :image="member4" />
        </div>
    </div>
    <div class="p-8">
        <h1 class="text-4xl lg:text-[48px] text-primary font-bold leading-tight text-center">
            {{ t('team_page.content_development') }}
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <TeamMemberCard name="Vanny Chean" role="Content Support" :image="member5" />
            <TeamMemberCard name="Sopheaktra Sen" role="Content Support" :image="member6" />
            <TeamMemberCard name="Sophin Chorn" role="Content & Partnership Support" :image="member7" />
            <TeamMemberCard name="Kanha Keo" role="Content Support" :image="member8" />
            <TeamMemberCard name="Proloeung Ream" role="Video Editor" :image="member9" />
            <TeamMemberCard name="Somath Chea" role="Video Editor" :image="member10" />
        </div>
    </div>
</template>