<script setup lang="ts"></script>

<template>
	<li class="sidebar__section">
		<h4 class="sidebar__title"><slot name="Title" /></h4>
		<ul class="sidebar__links">
			<slot />
		</ul>
	</li>
</template>

<style scoped lang="scss">
.sidebar__section {
	padding-top: 1.25rem;
	transition: all 0.5s ease;
	.sidebar__title {
		transition: all 0.5s ease;
		font-weight: 400;
	}
	&:has(.router-link-exact-active) .sidebar__title {
		color: #ffffffdf;
		font-weight: 700;
	}
}
.sidebar__title {
	:deep(*) {
		font-size: max(1rem, 0.6vw);
	}
}
.sidebar__links {
	margin-top: 0.5rem;
}
</style>
