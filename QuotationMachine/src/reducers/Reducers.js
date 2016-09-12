import { combineReducers } from 'redux' 
import { ADD_QUOTE, TWEET_QUOTE, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/ActionTypes'
const { SHOW_ALL } = VisibilityFilters


export function quotes(state = [], action) {
	switch (action.type) {
		case ADD_QUOTE:
			return [
				...state,
				{
					content: action.quote.content,
					author: action.quote.author,
					id: action.quote.id,
					tweeted: false,
				}
			]

		case TWEET_QUOTE:
			return state.map((quote, index) => {
				if (index === action.index) {
					return {
						...quote,
						tweeted: true
					}				
				}

				return quote
			})

		default:
			return state
	}
}

export function visibilityFilter(state = SHOW_ALL, action) {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter

		default:
			return state
	}
}


const quoteAppReducer = combineReducers({
	visibilityFilter,
	quotes
})

export default quoteAppReducer
