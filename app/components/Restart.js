import React from 'react';
import Style from '../stylesheets/main.scss';

class Restart extends React.Component {
	constructor(props) {
		super(props);
	}

	getStyle() {
		var style = "reset-button";

		if (this.props.won) {
			if (this.props.color)
				style += " reset-button-yellow";

			else
				style += " reset-button-red";
		}

		else
			style += " reset-button-blue";

		return style;
	}

	render() {
		return (
			<div className="restart">
				<a className={this.getStyle()} onClick={this.props.onClick}>RESET</a>
			</div>
		);
	}
}

export default Restart;
