<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<header class="header" id="header">
		<div class="header__container">
			<div class="header__body">
				<div class="header__logo">
					<router-link class="icon-style" to="/">project</router-link>
				</div>
				<div class="header__nav">
					<ul>
						<li>about</li>
						<li>p</li>
						<li>p</li>
						<li>p</li>
						<li>p</li>
						<li>p</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
.header {
	--header-padding: 1rem;
	--header-height: 3rem;
	padding-bottom: var(--header-padding);
	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;
	right: 0;
	background: #090b0b;
	box-shadow: -4px 7px 11px 1px rgb(0 0 0 / 21%);
}
.header__container {
	max-width: 80vw;
	margin: 0 auto;
	padding: 0px 15px;
}

.header__body {
	height: var(--header-height);
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 700;

	.header__logo {
		a {
			font-size: max(1.3rem, 1.4cqw);
		}
	}
}

.header__nav ul {
	display: flex;
	justify-content: space-between;
}

.header__nav ul li:not(:last-child) {
	margin-right: 1rem;
}
</style>
