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
	transition: all 0.5s ease;
	.sidebar__title {
		transition: all 0.5s ease;
		font-weight: 400;
	}
	&:has(.router-link-exact-active) .sidebar__title {
		color: #ffffffdf;
		font-weight: 700;
		:deep(span) {
			&:before {
				content: '';
				position: absolute;
				right: 0;
				left: 0;
				bottom: -4px;
				height: 2px;
				background: linear-gradient(
					90deg,
					rgba(0, 0, 0, 0) 10%,
					rgb(255, 255, 255) 53%,
					rgba(0, 0, 0, 0) 90%
				);
			}
		}
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
