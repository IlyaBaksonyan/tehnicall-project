export interface Site {
	id?: number
	title: string
	sections?: Section[]
	mainLinkTitle?: string
	mainLink: string
	icon?: string
	color1?: string
	color2?: string
}

export interface Section {
	title: string
	link: string
}
