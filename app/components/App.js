var React = require('react');
var Grid = require('./Grid');
var Drop = require('./Drop');

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Brandon</h1>
				<Drop />
				<Grid />
			</div>
		);
	}
}

module.exports = App;
