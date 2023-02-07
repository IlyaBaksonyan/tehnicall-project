<script lang="ts">
import { RouterView } from 'vue-router'
import './freelancerPage-interfaces'

export default {
	name: 'freelancerPage',
	data() {
		return {
			path: `/${import.meta.env.VITE_FREELANCER_PAGE}/`
		}
	},
	components: {
		RouterView
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
		<ul class="sidebar__links">
			<li class="sidebar__section">
				<router-link class="sidebar__link-p" :to="`${path}cms`"
					>cms</router-link
				>
				<ul class="sidebar__links">
					<li class="sidebar__link"></li>
					<li class="sidebar__link">
						<router-link :to="`${path}cms/1`">lorem-ipsum</router-link>
					</li>
					<li class="sidebar__link">
						<router-link :to="`${path}cms/2`">lorem-ipsum</router-link>
					</li>
					<li class="sidebar__link">
						<router-link :to="`${path}cms/3`">lorem-ipsum</router-link>
					</li>
				</ul>
			</li>
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
	color: #aec2d3;

	&__links {
		padding-left: 2vw;
		color: #aec2d3;
	}

	&__link {
		color: #aec2d3;

		a {
			color: #aec2d3;
			font-size: max(1rem, 0.8cqw);
		}
	}

	&__link-p {
		color: #aec2d3;
		font-size: max(1rem, 1.6cqw);
	}
}

@media (max-width: 800px) {
	.sidebar {
		translate: (-100%);
	}
}
</style>
