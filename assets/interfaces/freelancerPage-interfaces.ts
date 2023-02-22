export interface Site {
	id?: number
	title: string
	sections?: Section[]
	mainLinkTitle?: string
	mainLink: string
}

export interface Section {
	title: string
	link: string
}
