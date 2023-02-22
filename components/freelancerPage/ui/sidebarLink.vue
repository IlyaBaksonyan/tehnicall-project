<template>
	<li class="sidebar__link"><slot></slot></li>
</template>

<style lang="scss">
.sidebar__link {
	border-bottom: 1px #776f624b solid;
	a {
		font-weight: 400;
		font-size: clamp(0.9rem, 1rem, 0.7vmax);
	}
}
</style>
