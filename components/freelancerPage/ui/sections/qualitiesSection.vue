<script setup lang="ts">
//library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
//library
//types
import { Pros, Cons } from '~/assets/interfaces/cmsQualities'
//types
//json
import json from '~/assets/letters/cmsQualities.json'
//json

const pros = ref<Array<Pros>>(json.pros)
const cons = ref<Array<Cons>>(json.cons)

function animationScroll() {
	const scroller = '.cmsSection'
	const container = '.CMS__qualities'

	const tlAnimation = gsap.timeline({
		scrollTrigger: {
			//markers: true,
			trigger: container,
			scroller: scroller,
			start: 'start bottom',
			scrub: 0.5,
			snap: {
				snapTo: 0.5,
				duration: 0.5,
				directional: true,
				ease: 'ease'
			},
			end: 'bottom'
		}
	})
}
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animationScroll()
})
</script>
<template>
	<div class="CMS__qualities">
		<div class="constructors__qualities__content">
			<div class="CMS__qualities__leftPart">
				<ul>
					<li v-for="(item, i) in pros" :key="i"><b v-html="item.heading" /> {{ item.text }}</li>
				</ul>
			</div>
			<div class="CMS__qualities__rightPart">
				<ul>
					<li v-for="(item, i) in cons" :key="i"><b v-html="item.heading" /> {{ item.text }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
.CMS {
	&__qualities {
		display: flex;
		align-items: center;
		padding-inline: max(7vmin, 1rem);
		padding-block: max(1vmin, 1rem);
		min-width: 100%;
		height: var(--C100vh);
		gap: 5%;
		//background: var(--article-bc);
		text-align: justify;

		&__content {
			display: flex;
			gap: 5%;
		}
		&__leftPart,
		&__rightPart {
			display: flex;
			width: 50%;
			font-weight: 400;
			ul {
				display: flex;
				flex-direction: column;
				gap: max(1rem, 4vmin);
				font-size: max(3vmin, 0.6rem);
			}
		}

		&__leftPart {
			li {
				list-style: url(https://s.w.org/images/core/emoji/14.0.0/svg/2705.svg);
			}
		}

		&__rightPart {
			li {
				list-style: url(https://s.w.org/images/core/emoji/14.0.0/svg/274c.svg);
			}
		}
	}
}
</style>
