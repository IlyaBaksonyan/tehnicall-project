<script lang="ts">
export default {
	name: 'FreelancerPage'
}
</script>

<script setup lang="ts">
//icons
import UiIcon from '~/ui/UiIcon.vue'
import sidebarSection from './ui/sidebarSection.vue'
import sidebarLink from './ui/sidebarLink.vue'
import MenuIcon from '~/assets/Icons/burger.vue'
// icons
//json
import json from '@/assets/letters/freelancerPage.json'
//json
//interfaces
import { Site as Isites } from '@/assets/interfaces/freelancerPage-interfaces'
//interfaces
//nuxt
import { onMounted } from 'vue'
//nuxt

const mainPath: string = `/${import.meta.env.VITE_FREELANCER_PAGE}/`
const sites: Array<Isites> = json.sites
let asideState: boolean = window.matchMedia('(min-width: 1001px)').matches

function updateTabindexForSidebar() {
	const asideLinks: NodeListOf<Element> = document.querySelectorAll('#sidebar a')
	asideLinks.forEach(element => {
		const tabIndex = asideState ? '0' : '-1'
		element.setAttribute('tabindex', tabIndex)
	})
}

function HandleMenu() {
	const sidebar: any = document?.getElementById('sidebar')!
	sidebar.classList.toggle('open')
	!asideState ? (asideState = true) : (asideState = false)
	updateTabindexForSidebar()
}
function setFocusToTitle() {
	document.addEventListener('keydown', e => {
		if (e.code == 'KeyP') {
			;(document.querySelector('h1 a') as HTMLElement)?.focus()
		}
	})
}

onMounted(() => {
	setFocusToTitle()
	updateTabindexForSidebar()
})
</script>

<template>
	<button class="sidebar__button" @click="HandleMenu()">
		<MenuIcon class="menu" />
	</button>
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
							<NuxtLink :to="`${mainPath}${site.mainLink}/${site.mainLinkTitle}`">
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

		<main id="main" class="style">
			<NuxtPage />
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
	overflow-y: auto;
	overflow-x: hidden;
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

h2,
h3 {
	:after {
		content: '#';
	}
}

.sidebar__Title {
	display: inline-block;
}

.sidebar__mainTitle:has(.router-link-exact-active) .span-Title,
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

@media (min-width: 1000px) {
	:deep(.sidebar__Title:hover ~ .sidebar__links a) {
		color: #fff;
		font-weight: 600;
		scale: 1.1;
	}
	:deep(a:hover) {
		color: #fff;
		font-weight: 600;
		scale: 1.1;
	}
	:deep(.sidebar__link:hover) {
		color: #fff;
		font-weight: 600;
		scale: 1.1;
	}
}
@media (max-width: 425px) {
	.sidebar {
		height: 100%;
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
		top: 0;
		height: 100vh;

		&__button {
			display: block;
			padding: 0.8rem;
			left: 0;
			top: 0;
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
