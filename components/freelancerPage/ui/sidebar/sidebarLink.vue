<template>
	<li class="sidebar__link"><slot /></li>
</template>

<style lang="scss">
.sidebar__link {
	* {
		font-weight: 400;
		display: block;
		width: 100%;
		border-left: 1px solid #4b5154;
		padding-left: 1rem;
		font-size: clamp(0.9rem, 1rem, 0.7vmax);
		color: #c4beb5;
	}

	a.router-link-exact-active {
		color: #f6f6f6;
		border-left: 1px solid #fff;
		font-weight: 800;
	}
	&:hover * {
		color: #f6f6f6;
		border-left: 1px #ffffffba solid;
		font-weight: 500;
	}
}
</style>
