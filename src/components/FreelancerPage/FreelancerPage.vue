<script lang="ts">
import { RouterView } from 'vue-router'
import './freelancerPage-interfaces'

import sidebarSection from './ui/sidebarSection.vue'
import sidebarLink from './ui/sidebarLink.vue'
import MenuIcon from '@/assets/Icons/menu.vue'

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
		sidebarLink,
		MenuIcon
	},
	methods: {
		HandleMenu() {
			document.getElementById('sidebar')?.classList.toggle('open')
		}
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
	<div @click="HandleMenu" class="sidebar__button">
		<MenuIcon class="menu" />
	</div>
	<aside class="sidebar" id="sidebar">
		<ul class="sidebar__wrapper">
			<sidebarSection>
				<template #Title
					><RouterLink :to="`${path}/main`">Общее</RouterLink>
				</template>
			</sidebarSection>
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

.freelancerPageAside {
	margin-left: var(--sidebar-width);
}

.menu {
	width: 1.5rem;
	height: 1.5rem;
	display: block;
}

.open {
	transform: translate(0) !important;
}

.sidebar {
	position: fixed;
	z-index: 10;
	top: 0;
	bottom: 0;
	left: 0;
	overflow: auto;

	transition: all 0.25s ease;

	width: var(--sidebar-width);
	padding-top: calc(var(--header-size) + 5rem);
	border-right: 2px solid rgba(119, 111, 98, 0.12);
	background: #191b1c;

	&__button {
		position: absolute;
		top: calc(1rem + var(--header-size));
		left: 1rem;
		display: none;
		z-index: 150;
		padding: 0.6rem;
		cursor: pointer;
	}

	a {
		color: #aec2d3;
	}

	&__wrapper {
		padding-inline: 2ch;
	}

	&__link {
		a {
			font-size: 1rem;
			font-weight: 500;
		}
	}

	&__Title {
		a {
			font-size: 1.1rem;
		}
	}
}

@media (max-width: 1000px) {
	.sidebar {
		transform: translate(-100%);
		width: calc(var(--sidebar-width) - 3rem);

		&__button {
			display: block;
		}
	}

	.freelancerPageAside,
	main {
		margin-left: 0;
	}
}
</style>
