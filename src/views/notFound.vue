<script setup lang="ts">
import router from '@/router'

router.push('/')
</script>

<template>
	<div class="notFound">
		<h1>NotFound</h1>
	</div>
</template>

<style lang="scss">
.notFound {
	min-height: calc(100vh - var(--footer-height) - var(--header-size));
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 10cqw;
	}
}
</style>
