import React from 'react';
import { Button, Grid } from 'react-bootstrap';

const data = [
	{
		"author": "Spock",
		"content": "Live long and prosper.",
		"tweeted": true,
		"id": 0
	},
	{
		"author": "Mark Twain",
		"content": "Courage is not the absence of fear. Courage is the mastery of fear.",
		"tweeted": true,
		"id": 1
	}
];

class QuoteBox extends React.Component {
	getInitialState() {
		return {data: []};
	}
	render() {
		return (
			<Grid className="quoteBox">
				<p>
					Hello, world! I am a QuoteBox.
				</p>
				<QuoteList data={data}/>
				<QuoteForm/>
			</Grid>
		);

	}
}

class QuoteList extends React.Component {
	render() {
		const quoteNodes = this.props.data.map(function(quote) {
			return (
				<QuoteListEntry author={quote.author}>
					{quote.content}
				</QuoteListEntry>
			);
		})
		return (
			<div className="quoteList">
				{quoteNodes}
			</div>
		);
	}
}

class QuoteListEntry extends React.Component {
	render() {
		return (
			<div className="quoteListEntry">
				<h2 className="quoteAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
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