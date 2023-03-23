<script lang="ts">
export default function throttle(func: any, delay: number = 300) {
	let state: NodeJS.Timeout | null
	return (...args: any) => {
		if (!state) {
			state = setTimeout(() => {
				func(...args)
				state = null
			}, delay)
		}
	}
}
</script>
