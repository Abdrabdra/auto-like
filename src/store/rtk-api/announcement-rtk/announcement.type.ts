export interface IAnnouncements {
	data: IAnnouncement[],
	count: number
}

export interface IAnnouncement {
	id: number,
	price: number,
	createdAt: Date,
	views: number,
	model: string,
	transmission: string,
	avatar: null | string,
	year: number,
	mileage: number,
	steeringWheel: 'left' | 'right',
	volume: number,
	state: 'б/у' | 'новый',
	marka: string,
	city: string,
	body: string,
	like: string,
	countImages: string,
	profilelike: string
}
