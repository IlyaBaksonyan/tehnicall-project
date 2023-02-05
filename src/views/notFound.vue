<script setup lang="ts">
const path = window.location.pathname.slice(1)
localStorage.setItem('path', path)
window.location.href = '../'
</script>

<template>
	<div class="notFound">
		<h1>NotFound</h1>
	</div>
</template>

<style lang="scss">
.notFound {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;

	h1 {
		font-size: 10cqw;
	}
}
</style>
