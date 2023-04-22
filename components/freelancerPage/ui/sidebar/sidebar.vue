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
const burger = ref()
const mainPath: string = `/${import.meta.env.VITE_FREELANCER_PAGE}/`
const sites: Array<Isites> = json.sites
let asideState: boolean = window.matchMedia('(min-width: 1001px)').matches

function dragBurger() {
	const ParentContainer = burger.value.parentNode.parentNode
	ParentContainer?.appendChild(burger.value)
}

function updateTabindexForSidebar() {
	const asideLinks: NodeListOf<Element> = aside.value.querySelectorAll('a')
	asideLinks.forEach(element => {
		const tabIndex = asideState ? '0' : '-1'
		element.setAttribute('tabindex', tabIndex)
	})
}

function HandleMenu() {
	const checkIsOpen = () => (asideState = !asideState ? true : false)
	aside.value.classList.toggle('sidebar__burger-open')
	checkIsOpen()
	updateTabindexForSidebar()
}

onMounted(() => {
	dragBurger()
	updateTabindexForSidebar()
})
</script>
<template>
	<transition name="fade">
		<aside id="sidebar" ref="aside" class="sidebar">
			<button ref="burger" class="sidebar__burger" @click="HandleMenu()">
				<MenuIcon class="sidebar__burger__icon" />
			</button>
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
				<h4 class="sidebar__generalTitle">
					<NuxtLink :to="`${mainPath}conclusion`">
						<span class="span-title"> Вывод </span>
					</NuxtLink>
				</h4>
			</ul>
		</aside>
	</transition>
</template>

<style lang="scss">
.sidebar {
	top: 0;
	z-index: 10;
	height: 100vh;
	padding-top: 6rem;
	border-right: 2px solid rgba(119, 111, 98, 0.12);
	translate: -100%;
	position: fixed;
	transition: all 0.5s ease;
	background: #090b0b;
	min-width: 40vw;
	display: flex;
	justify-content: flex-end;
	padding-right: 5vw;

	&__wrapper {
		padding-inline: 2ch;
		display: flex;
		flex-direction: column;
		gap: 1rem;
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
		padding: 0.8rem;
		z-index: 150;
		cursor: pointer;
		background: #393939;
		border-radius: 50%;
		top: 4.5rem;
		transition: all 0.3s linear;
		svg,
		svg > * {
			transition: all 0.3s linear;
		}

		&__icon {
			display: block;
			fill: #efedea;
			height: 1.5rem;
			width: 1.5rem;
		}
		&-open {
			translate: 0 !important;
			.sidebar__burger {
				right: 0;
			}

			svg {
				.line-1 {
					transform: rotate(45deg);
					transform-origin: 5% 30%;
				}
				.line-2 {
					transform: translate(100%, 0);
					opacity: 0;
				}
				.line-3 {
					transform: rotate(315deg);
					transform-origin: 5% 70%;
				}
			}
		}
	}
}

@media (max-width: 1000px) {
	.sidebar {
		left: 0;
		position: fixed;
		background: #000;
		max-width: 30rem;
		top: 0;
		height: 100vh;

		&__burger {
			display: block;
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
