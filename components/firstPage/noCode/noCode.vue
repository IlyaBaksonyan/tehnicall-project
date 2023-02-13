<script lang="ts">
import { defineComponent } from 'vue'

import carousel from './ui/noCode-carousel/noCode-carousel.vue'
import type { Items } from './noCode-interfaces'

export default defineComponent({
	name: 'NoCode',
	components: {
		carousel
	},
	data(): {
		items: Array<Items>
	} {
		return {
			items: [
				{
					id: 1,
					text: `NoCode приложения (без кода) используются людьми, которые хотят создать веб-сайт без
				опыта кодирования. NoCode приложения часто используются предпринимателями, владельцами
				малого бизнеса, блоггерами и любителями, которые хотят быстро и легко
				создать веб-сайт без необходимости изучать код. Кроме того, платформы
				NoCode также часто используются разработчиками и дизайнерами, которые
				хотят быстро создавать прототипы и тестировать идеи без необходимости
				написания кода. Платформы NoCode - это отличный способ быстро и легко
				создать веб-сайт, который может быть использован любым человеком,
				независимо от его опыта работы с кодом.`,
					title: 'NoCode приложения',
					img: 'test.png'
				},
				{},
				{
					id: 2,
					text: `Чтобы создать сайт способом NoCode все что вам нужно это зайти на NoCode
				приложение, такие как например Glide, Adalo или Tilda. Выбрав платформу вы создаёте
				учетную запись и за несколько часов создаёте полный сайт методом
				конструктора, как только вы будете вы будете довольны дизайном вы
				нажимаете кнопку и сайт появляется в интернете с вашим доменном. Кроме
				того, большинство платформ NoCode предлагают дополнительные функции,
				такие как хостинг, аналитика и возможности электронной коммерции,
				которые вы можете использовать для дальнейшей настройки и улучшения
				вашего сайта.`,
					title: 'Так как же все таки создать',
					img: 'test2.png'
				},
				{}
			]
		}
	}
})
</script>

<template>
	<section id="noCode" class="noCode">
		<div class="noCode__wrapper">
			<carousel :carouselData="items" />
		</div>
	</section>
</template>

<style scoped lang="scss">
.noCode {
	width: 99.1vw;
	margin-left: -50vw;
	left: 50.7%;

	&__wrapper {
		position: absolute;
		overflow: hidden;
	}

	&__btns {
		z-index: 1;
	}
}
</style>

<style lang="scss">
.noCode {
	--carouselTitle-first-color: #be9e35;
	--carouselTitle-second-color: #fff;
	--carouselTitle-third-color: #fff;
}
.carousel__section:nth-child(2) {
	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: var(--article-bc);
	}
}
</style>
