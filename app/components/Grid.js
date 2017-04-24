var React = require('react');
var Row = require('./Row');

class Grid extends React.Component {
	render() {
		return (
			<div>
				<Row />
				<Row />
				<Row />
				<Row />
				<Row />
				<Row />
			</div>
		);
	}
}

module.exports = Grid;
