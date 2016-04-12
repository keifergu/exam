export const SET_FILTER = 'SET_FILTER';

export const Filters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_SIGN: 'SHOW_SIGN'
}

export function setFilter(filter) {
	return [
		type: SET_FILTER,
		filter
	]
}