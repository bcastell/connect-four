import React from 'react';
import Style from '../stylesheets/main.scss';

class Restart extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var buttonStyle = "reset-button";

		if (this.props.won && this.props.color) {
			buttonStyle += " reset-button-yellow";
		}

		else if (this.props.won && !this.props.color) {
			buttonStyle += " reset-button-red";
		}

		else {
			buttonStyle += " reset-button-blue";
		}

		return (
			<div className="restart">
				<a className={buttonStyle} onClick={this.props.onClick}>RESET</a>
			</div>
		);
	}
}

export default Restart;
