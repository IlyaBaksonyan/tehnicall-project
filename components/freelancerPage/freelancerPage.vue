<script setup lang="ts">
import UiIcon from '~/ui/UiIcon.vue'
</script>

<script lang="ts">
import sidebarSection from './ui/sidebarSection.vue'
import sidebarLink from './ui/sidebarLink.vue'
import MenuIcon from '@/assets/Icons/menu.vue'

import json from '@/assets/letters/freelancerPage.json'
import { Site as Isites } from '@/assets/interfaces/freelancerPage-interfaces'

export default {
	name: 'FreelancerPage',
	components: {
		sidebarSection,
		sidebarLink,
		MenuIcon
	},
	data(): {
		mainPath: string
		sites: Array<Isites>
	} {
		return {
			mainPath: `/${import.meta.env.VITE_FREELANCER_PAGE}/`,
			sites: json.sites
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
			<aside id="sidebar" ref="aside" class="sidebar">
				<ul class="sidebar__wrapper">
					<h4 class="sidebar__mainTitle">
						<NuxtLink class="sidebar__general" :to="`${mainPath}main`">
							<span class="span-Title"> Фриланс </span>
						</NuxtLink>
					</h4>
					<sidebarSection v-for="(site, i) in sites" :key="i">
						<template #Title>
							<NuxtLink
								:to="`${mainPath}${site.mainLink}/${site.mainLinkTitle}`"
							>
								<UiIcon
									:icon="site.icon"
									:stroke="site.color1"
									:fill="site.color2"
									class="sidebar__icons"
								/>
								<span class="span-Title">
									{{ site.title }}
								</span>
							</NuxtLink>
						</template>
						<sidebarLink v-for="(section, i) in site.sections" :key="i">
							<NuxtLink :to="`${mainPath}${site.mainLink}/${section.link}`">
								{{ section.title }}
							</NuxtLink>
						</sidebarLink>
					</sidebarSection>
				</ul>
			</aside>
		</transition>

		<main>
			<div class="style">
				<NuxtPage />
			</div>
		</main>
	</div>
</template>
<style scoped lang="scss">
.container {
	max-width: 1280px;
}

.wrapper {
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(10, minmax(0, 1fr));

	main {
		grid-column: 3 / 11;
		margin-top: var(--header-size);
		min-height: 100vh;
	}
}

.sidebar {
	height: var(--C100vh);
	position: sticky;
	z-index: 10;
	top: 5%;
	overflow: auto;
	transition: transform 0.5s ease;
	grid-column: 1/3;
	padding-top: 6rem;
	border-right: 2px solid rgba(119, 111, 98, 0.12);

	&__icons {
		width: 1.25rem;
		display: inline-block;
		vertical-align: middle;
	}

	* a {
		color: #aec2d3;
		display: block;
	}
	&__wrapper {
		padding-inline: 2ch;
	}
	&__general {
		font-size: 1.1rem;
	}

	&__button {
		position: fixed;
		top: calc(1rem + var(--header-size));
		left: 1rem;
		display: none;
		z-index: 150;
		padding: 0.6rem;
		cursor: pointer;

		.menu {
			width: 1.5rem;
			height: 1.5rem;
			display: block;
		}
	}
}

.sidebar__Title {
	display: inline-block;
}

.sidebar__mainTitle:has(.router-link-exact-active) .span-Title {
	color: #fff !important;
	&::after {
		content: '';
		height: 2px;
		margin-inline: -50%;
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0) 10%,
			rgb(0 215 255) 53%,
			rgba(0, 0, 0, 0) 90%
		);
		display: block;
	}
}
.sidebar__section:has(.router-link-exact-active) .span-Title {
	color: #fff;
	&::after {
		content: '';
		height: 2px;
		margin-inline: -10%;
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0) 10%,
			rgb(0 215 255) 53%,
			rgba(0, 0, 0, 0) 90%
		);
		display: block;
	}
}
span {
	display: inline-block;
}

:deep(.sidebar__Title:hover ~ .sidebar__links a span) {
	color: #fff;
}
:deep(a:hover) {
	color: #fff;
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
		top: initial;

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

:deep(.style) {
	@import '~/assets/styles/freelancerPage.scss';
}
</style>

<style lang="scss"></style>
