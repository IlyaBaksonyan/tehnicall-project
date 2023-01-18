<script setup lang="ts">
import './Header-interfaces.vue'
</script>

<template>
	<header class="header" id="header">
		<div class="header__container">
			<div class="header__body">
				<div class="header__logo">
					<span class="icon-style">project</span>
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
	padding-bottom: 1rem;
	position: fixed;
	background: #090b0b;
	width: 100%;
	z-index: 9999;
	top: 0;
	left: 0;
	box-shadow: -4px 7px 11px 1px rgb(0 0 0 / 21%);
}
.header__container {
	max-width: 80rem;
	margin: 0 auto;
	padding: 0px 15px;
}

.header__body {
	height: 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 700;
}

.header__nav ul {
	display: flex;
	justify-content: space-between;
}

.header__nav ul li:not(:last-child) {
	margin-right: 1rem;
}
</style>
