import * as actions from './ActionTypes.js'

describe('actions', () => {
	it('should create an action to add a quote', () => {
		const quote = {
			"author": "Spock",
			"content": "Live long and prosper."
		}
		const expectedAction = {
			type: actions.ADD_QUOTE,
			quote: {
				"author": "Spock",
				"content": "Live long and prosper."
			}
		}

		expect(actions.addQuote(quote)).toEqual(expectedAction)
	})

	it('should create an action to set a visiblity filter', () => {
		 const filter = actions.VisibilityFilters['SHOW_ALL']
		 const expectedAction = {
		 	type: actions.SET_VISIBILITY_FILTER,
		 	filter: filter
		 }

		 expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction)
	})

	it('should create an action to tweet a quote', () => {
		const quoteId = 42
		const expectedAction = {
			type: actions.TWEET_QUOTE,
			id: quoteId
		}

		expect(actions.tweetQuote(quoteId)).toEqual(expectedAction)
	})
})