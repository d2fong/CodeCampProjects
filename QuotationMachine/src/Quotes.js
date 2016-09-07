import React, { Component } from 'react';
import { Button, Grid } from 'react-bootstrap';

class QuoteBox extends Component {
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

class QuoteList extends Component {
	render() {
		return (
			<div className="quoteList">
				<p>
					Gimme all your quotes.
				</p>
			</div>
		);
	}
}

class QuoteListEntry extends Component {
	render() {
		return (
			<div className="quoteListEntry">
				<p>
					Quote Author Here.
				</p>
				<p>
					Quote Content Here.
				</p>
			</div>
		);

	}
}

class QuoteForm extends Component {
	render() {
		return (
			<Button className="newQuoteButton">
			</Button>
		);
	}

}


export default QuoteBox
export default QuoteList
export default QuoteListEntry