// Action types

export const ADD_QUOTE = 'ADD_QUOTE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const TWEET_QUOTE = 'TWEET_QUOTE'

// Visibility types

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_TWEETED: 'SHOW_TWEETED',
	SHOW_UNTWEETED: 'SHOW_UNTWEETED'
}

// Action creators

let nextQuoteId = 0
export function addQuote(quote) {
	quote.id = nextQuoteId++
	return {
		type: ADD_QUOTE,
		quote: quote
	}
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter: filter
	}
}

export function tweetQuote(quoteId) {
	return {
		type: TWEET_QUOTE,
		id: quoteId
	}
}