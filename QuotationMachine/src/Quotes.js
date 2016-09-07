import React from 'react';
import { Button, Grid } from 'react-bootstrap';

var data = [
	{
		"author": "Spock",
		"content": "Live long and prosper."
	},
	{
		"author": "Mark Twain",
		"content": "Courage is not the absence of fear. Courage is the mastery of fear."
	}
];

class QuoteBox extends React.Component {
	render() {
		return (
			<Grid className="quoteBox">
				<p>
					Hello, world! I am a QuoteBox.
				</p>
				<QuoteList/>
				<QuoteForm/>
			</Grid>
		);

	}
}

class QuoteList extends React.Component {
	render() {
		return (
			<div className="quoteList">
				<p>
					Gimme all your quotes.
					<QuoteListEntry author="Someone">This is a comment</QuoteListEntry>
					<QuoteListEntry author="Someone Else">This is a comment too</QuoteListEntry>
				</p>
			</div>
		);
	}
}

class QuoteListEntry extends React.Component {
	render() {
		return (
			<div className="quoteListEntry">
				<h2 className="quoteAuthor">
					Quote Author Here.
				</h2>
			</div>
		);

	}
}

class QuoteForm extends React.Component {
	render() {
		return (
			<Button className="newQuoteButton">
				New Quote
			</Button>
		);
	}

}


export default QuoteBox;
// export const QuoteList
// export const QuoteListEntry;