export const type = value => (...types) => {

	/// Check the given value against the given types.
	/// => undefined (or throw)

	let pass = (value == null) 
		? types.includes(value)
		: types.includes(value.constructor)
	
	if (!pass) {
		const typesList = (types.length > 1)
			? [...types.slice(0,-1), 'or', types.pop()]
			: types
		console.trace(value, 'is not of type', ...typesList)
		throw 'Type check failed.'
	}
}