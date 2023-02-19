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
			<img :style="echanges2" src="/images/freelancerPage/Fril.png" alt="" />
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
		img {
			position: absolute;
			width: 3rem;
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
		img:nth-child(1) {
			top: 0;
		}
		img:nth-child(2) {
			right: 0;
		}
		img:nth-child(3) {
			bottom: 0;
		}
		img:nth-child(4) {
			left: 0;
		}
	}
}
</style>
