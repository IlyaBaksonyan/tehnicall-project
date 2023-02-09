<script lang="ts">
import { RouterView } from 'vue-router'
import './freelancerPage-interfaces'

import sidebarSection from './sidebar/sidebarSection.vue'
import sidebarLink from './sidebar/sidebarLink.vue'

export default {
	name: 'freelancerPage',
	data() {
		return {
			path: `/${import.meta.env.VITE_FREELANCER_PAGE}`
		}
	},
	components: {
		RouterView,

		sidebarSection,
		sidebarLink
	},
	mounted() {
		;(document.querySelector('footer') as HTMLElement).classList.add(
			'freelancerPageAside'
		)
	},
	unmounted() {
		;(document.querySelector('footer') as HTMLElement).classList.remove(
			'freelancerPageAside'
		)
	}
}
</script>
<template>
	<aside class="sidebar">
		<ul class="sidebar__wrapper">
			<sidebarSection>
				<template #Title>
					<router-link :to="`${path}/cms`"
						>Система управления содержанием</router-link
					>
				</template>
				<sidebarLink>
					<router-link :to="`${path}/cms/1`">lorem-ipsum</router-link>
				</sidebarLink>
				<sidebarLink>
					<router-link :to="`${path}/cms/2`">lorem-ipsum</router-link>
				</sidebarLink>
				<sidebarLink>
					<router-link :to="`${path}/cms/3`">lorem-ipsum</router-link>
				</sidebarLink>
			</sidebarSection>
			<sidebarSection>
				<template #Title>
					<router-link :to="`${path}/studios`">Студии</router-link>
				</template>
				<sidebarLink>
					<router-link :to="`${path}/studios/1`">lorem-ipsum</router-link>
				</sidebarLink>
				<sidebarLink>
					<router-link :to="`${path}/studios/2`">lorem-ipsum</router-link>
				</sidebarLink>
				<sidebarLink>
					<router-link :to="`${path}/studios/3`">lorem-ipsum</router-link>
				</sidebarLink>
			</sidebarSection>
		</ul>
	</aside>
	<main>
		<div class="container">
			<RouterView />
		</div>
	</main>
</template>
<style lang="scss">
main {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-left: 20vw;
	margin-top: var(--header-size);
}

.sidebar {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	overflow: auto;

	transition: all 0.25s ease;

	width: var(--sidebar-width);
	margin-top: var(--header-size);
	border-right: 2px solid rgba(119, 111, 98, 0.12);
	background-color: #0000003b;

	a {
		color: #aec2d3;
	}

	&__wrapper {
		padding-inline: 2ch;
	}

	&__link {
		a {
			// font-size: max(1rem, 0.8cqw);
			font-size: 1rem;
			font-weight: 500;
		}
	}

	&__Title {
		a {
			// font-size: max(1rem, 1.6cqw);
			font-size: 1.1rem;
		}
	}
}

@media (max-width: 800px) {
	.sidebar {
		translate: (-100%);
	}
}
</style>
