<script setup lang="ts">
//icons
import UiIcon from '~/ui/UiIcon.vue'
import sidebarSection from './sidebarSection.vue'
import sidebarLink from './sidebarLink.vue'
import MenuIcon from '~/assets/Icons/burger.vue'
// icons

//json
import json from '@/assets/letters/freelancerPage.json'
//json

//interfaces
import { Site as Isites } from '@/assets/interfaces/freelancerPage-interfaces'
//interfaces

const aside = ref()
const mainPath: string = `/${import.meta.env.VITE_FREELANCER_PAGE}/`
const sites: Array<Isites> = json.sites
let asideState: boolean = window.matchMedia('(min-width: 1001px)').matches

function updateTabindexForSidebar() {
	const asideLinks: NodeListOf<Element> = aside.value.querySelectorAll('a')
	asideLinks.forEach(element => {
		const tabIndex = asideState ? '0' : '-1'
		element.setAttribute('tabindex', tabIndex)
	})
}

const checkWidth = () => (asideState = !asideState ? true : false)

function HandleMenu() {
	aside.value.classList.toggle('sidebar__burger-open')
	checkWidth()
	updateTabindexForSidebar()
}

onMounted(() => {
	updateTabindexForSidebar()
})
</script>
<template>
	<button class="sidebar__burger" @click="HandleMenu()">
		<MenuIcon class="sidebar__burger__icon" />
	</button>
	<transition name="fade">
		<aside id="sidebar" ref="aside" class="sidebar">
			<ul class="sidebar__wrapper">
				<h4 class="sidebar__generalTitle">
					<NuxtLink :to="`${mainPath}main`">
						<span class="span-title"> Фриланс </span>
					</NuxtLink>
				</h4>
				<sidebarSection v-for="(site, i) in sites" :key="i">
					<template #Title>
						<span class="span-title">
							{{ site.title }}
						</span>
						<UiIcon
							:icon="site.icon"
							:stroke="site.color1"
							:fill="site.color2"
							class="sidebar__icons"
						/>
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
</template>

<style lang="scss">
.sidebar {
	position: sticky;
	top: 5%;
	z-index: 10;
	height: var(--C100vh);
	overflow-x: hidden;
	overflow-y: auto;
	grid-column: 1/3;
	padding-top: 6rem;
	border-right: 2px solid rgba(119, 111, 98, 0.12);
	transition: transform 0.5s ease;

	&__wrapper {
		padding-inline: 2ch;
	}

	&__generalTitle {
		display: inline-block;
	}

	span {
		display: inline;
	}

	&__icons {
		display: inline-block;
		vertical-align: middle;
		width: 1.25rem;
		margin-left: 0.2rem;
	}

	a.router-link-exact-active .sidebar__title {
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

	&__burger {
		position: fixed;
		top: calc(1rem + var(--header-size));
		left: 1rem;
		display: none;
		z-index: 150;
		padding: 0.6rem;
		cursor: pointer;

		&__icon {
			display: block;
			height: 1.5rem;
			width: 1.5rem;
		}
		&-open {
			transform: translate(0) !important;
		}
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

		&__burger {
			display: block;
			padding: 0.8rem;
			left: 0;
			top: 0;
		}
	}
}
@media (max-width: 425px) {
	.sidebar {
		height: 100%;
		width: 100%;
	}
}
</style>
