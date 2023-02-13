export default function scrollBehavior(to, from, savedPosition) {
	if (savedPosition) {
		return savedPosition
	} else {
		return { top: 0 }
	}
}
