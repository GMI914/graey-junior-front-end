<template>
    <footer>
        <div class="footer-content">
            <div v-for="(category, i) in footerLinks" :key="i">
                <p>{{ category.name }}</p>
                <template v-for="link in category.links">
                    <a v-if="link.href" :href="link.href">{{ link.name }}</a>
                    <RouterLink v-else :to="link.route">{{ link.name }}</RouterLink>
                </template>
            </div>
        </div>
    </footer>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'FooterComponent',
    components: {
        RouterLink
    },
    data() {
        return {
            footerLinks: [
                {
                    name: 'ჩვენ შესახებ',
                    links: [
                        {
                            name: 'მანიფესტი',
                            route: {
                                name: 'manifest'
                            }
                        },
                        {
                            name: 'ბიზნესი',
                            href: "#"
                        },
                        {
                            name: 'მიწოდება',
                            href: "#"
                        },
                        {
                            name: 'ბლოგი',
                            href: "#"
                        },
                        {
                            name: 'მიმდინარე შეთავაზებები',
                            href: "#"
                        },
                        {
                            name: 'FAQ',
                            href: "#"
                        }
                    ]
                },
                {
                    name: 'წესები & პირობები',
                    links: [
                        {
                            name: 'წესები & პირობები',
                            href: "#"
                        },
                        {
                            name: 'კონფიდენციალურობა',
                            href: "#"
                        },
                        {
                            name: 'დაბრუნება',
                            href: "#"
                        },
                        {
                            name: 'განვადება',
                            href: "#"
                        }
                    ]
                },
                {
                    name: 'გამოგვყევი',
                    links: [
                        {
                            name: 'facebook',
                            href: "#"
                        },
                        {
                            name: 'instagram',
                            href: "#"
                        },
                        {
                            name: 'youtube',
                            href: "#"
                        },
                        {
                            name: 'linkedin',
                            href: "#"
                        },
                        {
                            name: 'tiktok',
                            href: "#"
                        }
                    ]
                },
                {
                    name: 'კონტაქტი',
                    links: [
                        {
                            name: '032 2 56 05 05',
                            href: "#"
                        },
                        {
                            name: 'support@veli.store',
                            href: "#"
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
footer {
    background-color: rgba(245, 246, 246, 0.6);
    padding: 60px 32px 36px;
}

.footer-content {
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

p {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
    cursor: default;
}

a {
    display: block;
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 10px;
    text-decoration: none;
    color: inherit;
}

a:hover {
    color: #8A4E3C;
}
</style>
