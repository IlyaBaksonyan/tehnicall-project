<script lang="ts">
import sidebarSection from './ui/sidebarSection.vue'
import sidebarLink from './ui/sidebarLink.vue'
import MenuIcon from '@/assets/Icons/menu.vue'

export default {
	name: 'FreelancerPage',
	components: {
		sidebarSection,
		sidebarLink,
		MenuIcon
	},
	data() {
		return {
			path: `/${import.meta.env.VITE_FREELANCER_PAGE}`
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
	},
	methods: {
		HandleMenu() {
			;(document.getElementById('sidebar') as HTMLElement).classList.toggle(
				'open'
			)
		}
	}
}
</script>
<template>
	<div class="sidebar__button" @click="HandleMenu">
		<MenuIcon class="menu" />
	</div>
	<div class="wrapper">
		<aside id="sidebar" class="sidebar">
			<ul class="sidebar__wrapper">
				<NuxtLink class="sidebar__general" :to="`${path}/main`">Общее</NuxtLink>

				<sidebarSection>
					<template #Title> Система управления содержанием </template>
					<sidebarLink>
						<NuxtLink :to="`${path}/cms/lorem`">lorem-ipsum</NuxtLink>
					</sidebarLink>
					<sidebarLink>
						<NuxtLink :to="`${path}/cms/lorem2`">lorem-ipsum</NuxtLink>
					</sidebarLink>
					<sidebarLink>
						<NuxtLink :to="`${path}/cms/lorem3`">lorem-ipsum</NuxtLink>
					</sidebarLink>
				</sidebarSection>
				<sidebarSection>
					<template #Title> Студии </template>
					<sidebarLink>
						<NuxtLink :to="`${path}/studios/lorem`">lorem-ipsum</NuxtLink>
					</sidebarLink>
					<sidebarLink>
						<NuxtLink :to="`${path}/studios/lorem2`">lorem-ipsum</NuxtLink>
					</sidebarLink>
					<sidebarLink>
						<NuxtLink :to="`${path}/studios/lorem3`">lorem-ipsum</NuxtLink>
					</sidebarLink>
				</sidebarSection>
			</ul>
		</aside>
		<main>
			<div class="container">
				<NuxtPage />
			</div>
		</main>
	</div>
</template>
<style scoped lang="scss">
main {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	margin-left: var(--sidebar-width);
	margin-top: var(--header-size);
}

.wrapper {
	display: flex;
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
	color: #aec2d3;

	a {
		color: #aec2d3;
	}

	&__button {
		position: absolute;
		top: calc(1rem + var(--header-size));
		left: 1rem;
		display: none;
		z-index: 150;
		padding: 0.6rem;
		cursor: pointer;
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
		font-size: 1.1rem;
		a {
			font-size: 1.1rem;
		}
	}
}
.sidebar__general {
	font-size: 1.1rem;
}

@media (max-width: 1000px) {
	.sidebar {
		transform: translate(-100%);
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

<style lang="scss">
.freelancerPageAside {
	margin-left: var(--sidebar-width);
}

@media (max-width: 1000px) {
	.freelancerPageAside {
		margin-left: 0;
	}
}
</style>
