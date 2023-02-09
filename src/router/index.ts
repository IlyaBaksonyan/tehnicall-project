import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/FirstPage.vue')
		},
		{
			path: '/freelancerPage',
			name: 'freelancerPage',
			component: () => import('@/views/FreelancerPage.vue'),
			children: [
				{
					path: 'main',
					component: () =>
						import('@/components/FreelancerPage/content/main.vue')
				},
				{
					path: 'cms',
					component: () => import('@/views/freelancerPages/cms.vue'),
					children: [
						{
							path: '1',
							component: () => import('@/views/freelancerPages/cms.vue')
						},
						{
							path: '2',
							component: () => import('@/views/freelancerPages/cms.vue')
						},
						{
							path: '3',
							component: () => import('@/views/freelancerPages/cms.vue')
						}
					]
				},
				{
					path: 'studios',
					component: () => import('@/views/freelancerPages/studios.vue'),
					children: [
						{
							path: '1',
							component: () => import('@/views/freelancerPages/cms.vue')
						},
						{
							path: '2',
							component: () => import('@/views/freelancerPages/cms.vue')
						},
						{
							path: '3',
							component: () => import('@/views/freelancerPages/cms.vue')
						}
					]
				}
			]
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('@/views/notFound.vue')
		}
	]
})

export default router
