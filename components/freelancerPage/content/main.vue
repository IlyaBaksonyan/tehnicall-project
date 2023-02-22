<script setup lang="ts">
import upwork from '~~/assets/Icons/upwork.vue'
</script>

<script lang="ts">
export default {
	name: 'FreelancerPage-main',
	data() {
		return {}
	},
	computed: {
		echanges1() {
			const max = 47,
				min = 25
			return {
				left: Math.round(Math.random() * (max - min) + min) + '%'
			}
		},
		echanges2() {
			const max = 41,
				min = 29
			return {
				top: Math.round(Math.random() * (max - min) + min) + '%'
			}
		}
	}
}
</script>

<template>
	<div class="firstScreen">
		<div class="introduction-wrapper">
			<h1>Фриланс</h1>
			<p>
				Работа из любой точки мира и место нанимания разработчиков любого уровня
			</p>
		</div>
		<div class="echanges">
			<img :style="echanges1" src="/images/freelancerPage/FL.png" alt="" />
			<div :style="echanges2">
				<upwork width="5vw" fill="white" class="upwork" />
			</div>
			<img :style="echanges1" src="/images/freelancerPage/Q.png" alt="" />
			<img :style="echanges2" src="/images/freelancerPage/webF.png" alt="" />
		</div>
	</div>
	<h2>фриланс биржи</h2>
	<p>
		Чтобы получить сайт, можно зайти на одну из популярных фриланс площадок и
		заказать сайт у фрилансеров или студий. Многие фрилансеры предлагают такие
		услуги, как веб-дизайн, разработка и создание контента. Можно просмотреть их
		портфолио и отзывы, для чтобы найти подходящего специалиста. При заказе
		веб-сайта не забудьте предоставить четкие инструкции и ожидания, чтобы
		фрилансер мог предоставить наилучший продукт. Обязательно заранее обсудите
		цены и условия оплаты, а также обязательно просмотрите готовый продукт,
		прежде чем платить фрилансеру.
	</p>
	<h2>CMS или Система управления содержимым</h2>
	<h3>Для обычных людей</h3>
	<p>
		CMS - это система управления контентом, которая позволяет управлять
		созданием, редактированием и публикацией контента на веб-сайтах.
	</p>
	<h3>Для разработчиков</h3>
	<p>
		Система для упрощения процесса создания сайтов, используя готовые модули и
		инструменты.
	</p>
	<h2>фрилансеры</h2>
	<p>
		Фрилансеры - Люди не находящиеся в постоянном рабочем отношении с какой-либо
		компанией. работают на себя и выполняют заказы на разработку программного
		обеспечения для клиентов.
	</p>
	<h2>Студии</h2>
	<p>
		Студии, это компании или коллективы фрилансеров, которые специализируются на
		создании сайтов для клиентов. Они могут предлагать различные услуги, такие
		как веб-дизайн, разработку, оптимизацию и поддержку сайта.
	</p>
</template>

<style lang="scss">
.firstScreen {
	display: flex;
	justify-content: space-between;
	margin-bottom: 3rem;
	height: 10rem;
	padding-right: 8vmin;

	.introduction-wrapper {
		flex-basis: 60%;
	}

	.echanges {
		width: 10rem;
		* {
			position: absolute;
			width: 3rem;
		}

		.upwork {
			background-color: #6dff59;
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			padding: -28%;
			margin: -23%;
			pointer-events: none;
			background: radial-gradient(
				circle,
				rgb(92 194 94) 0%,
				rgba(0, 0, 0, 0) 70%
			);
		}
	}

	.echanges {
		*:nth-child(1) {
			top: 0;
		}
		*:nth-child(2) {
			right: 0;
		}
		*:nth-child(3) {
			bottom: 0;
		}
		*:nth-child(4) {
			left: 0;
		}
	}
}
</style>
