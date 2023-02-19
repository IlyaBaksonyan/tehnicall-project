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

	methods: {
		HandleMenu() {
			;(this.$refs.aside as HTMLElement).classList.toggle('open')
		}
	}
}
</script>
<template>
	<div class="sidebar__button" @click="HandleMenu()">
		<MenuIcon class="menu" />
	</div>
	<div class="wrapper container">
		<transition name="fade">
			<aside ref="aside" id="sidebar" class="sidebar">
				<ul class="sidebar__wrapper">
					<NuxtLink class="sidebar__general" :to="`${path}/main`"
						>Общее</NuxtLink
					>

					<sidebarSection>
						<template #Title> Система управления содержанием </template>
						<sidebarLink>
							<NuxtLink :to="`${path}/cms/cms1`">loremipsum</NuxtLink>
						</sidebarLink>
						<sidebarLink>
							<NuxtLink :to="`${path}/cms/cms2`">loremipsum</NuxtLink>
						</sidebarLink>
						<sidebarLink>
							<NuxtLink :to="`${path}/cms/cms3`">loremipsum</NuxtLink>
						</sidebarLink>
					</sidebarSection>
					<sidebarSection>
						<template #Title> Фрилансеры </template>
						<sidebarLink>
							<NuxtLink :to="`${path}/studios/studios1`"
								>loremipsum,,,</NuxtLink
							>
						</sidebarLink>
						<sidebarLink>
							<NuxtLink :to="`${path}/studios/studios2`">loremipsum</NuxtLink>
						</sidebarLink>
						<sidebarLink>
							<NuxtLink :to="`${path}/studios/studios3`">loremipsum</NuxtLink>
						</sidebarLink>
					</sidebarSection>
					<sidebarSection>
						<template #Title> Студии </template>
						<sidebarLink>
							<NuxtLink :to="`${path}/studios/studios1`"
								>loremipsum,,,</NuxtLink
							>
						</sidebarLink>
						<sidebarLink>
							<NuxtLink :to="`${path}/studios/studios2`">loremipsum</NuxtLink>
						</sidebarLink>
						<sidebarLink>
							<NuxtLink :to="`${path}/studios/studios3`">loremipsum</NuxtLink>
						</sidebarLink>
					</sidebarSection>
				</ul>
			</aside>
		</transition>

		<main>
			<div>
				<NuxtPage />
			</div>
		</main>
	</div>
</template>
<style scoped lang="scss">
.wrapper {
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(10, minmax(0, 1fr));
}
main {
	grid-column: 3 / 11;

	margin-top: var(--header-size);
	min-height: 100vh;
}

.container {
	max-width: 1200px;
}

.cms {
	font-size: 10vw;
}
.menu {
	width: 1.5rem;
	height: 1.5rem;
	display: block;
}

.sidebar {
	height: 100vh;
	position: sticky;
	z-index: 10;
	top: var(--header-size);
	overflow: auto;
	transition: transform 0.5s ease;
	grid-column: 1/3;
	padding-top: calc(var(--header-size) + var(--header-size) - 2rem);
	border-right: 2px solid rgba(119, 111, 98, 0.12);
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

@media (max-width: 425px) {
	.sidebar {
		width: 100%;
	}
}

@media (max-width: 1000px) {
	.sidebar {
		left: 0;
		position: fixed;
		transform: translate(-100%);
		background: #000;
		max-width: 30rem;
		&__button {
			display: block;
		}
	}

	.wrapper {
		display: block;
	}
}

.open {
	transform: translate(0) !important;
}
</style>
