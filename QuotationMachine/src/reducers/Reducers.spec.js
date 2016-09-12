import { quotes, visibilityFilter } from './Reducers.js'
import * as actions from '../actions/ActionTypes.js'

describe('reducers', () => {

	it('should not mutate the state', () => {
		const stateBefore = []
		const action = {
			type: actions.ADD_QUOTE,
			quote: {
				"author": "Spock",
				"content": "Live long and prosper."
			}
		}
		expect(quotes(stateBefore, action)).not.toBe(stateBefore)
	})

	it('should add a quote', () => {
		const stateBefore = []
		const action = {
			type: actions.ADD_QUOTE,
			quote: {
				"author": "Spock",
				"content": "Live long and prosper.",
				"id": 0
			}
		}
		const stateAfter = [{
			"author": "Spock",
			"content": "Live long and prosper.",
			"id": 0,
			"tweeted": false
		}]
		expect(quotes(stateBefore, action)).toEqual(stateAfter)
	})

	it('should change the visibility filter', () => {
		const action = {
			type: actions.SET_VISIBILITY_FILTER,
			filter: actions.VisibilityFilters.SHOW_TWEETED
		}

		expect(visibilityFilter(undefined, action)).toEqual(actions.VisibilityFilters.SHOW_TWEETED)
	})

})