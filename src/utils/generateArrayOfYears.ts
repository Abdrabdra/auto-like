export function generateArrayOfYears(
	from: number,
	to: number | null
): number[] {
	let years: number[] = []

	let toValue = to ? to : new Date().getFullYear()

	for (var i = toValue; i >= from; i--) {
		years.push(i)
	}

	return years
}
