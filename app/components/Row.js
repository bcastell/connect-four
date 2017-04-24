var React = require('react');
var Hole = require('./Hole');

class Row extends React.Component {
	render() {
		return (
			<div>
				<Hole />
				<Hole />
				<Hole />
				<Hole />
				<Hole />
				<Hole />
				<Hole />
			</div>
		);
	}
}

module.exports = Row;
