import React from 'react';
import Style from '../stylesheets/main.scss';

class Chip extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover : false
		};
	}

	toggleHover() {
		this.setState(prevState => ({hover : !prevState.hover}));
	}

	getStyle() {
		var style = "chip";

		if (this.state.hover) {
			if (this.props.red)
				style += " chip-red";

			else
				style += " chip-yellow";
		}

		else
			style += " chip-white";

		return style;
	}

	render() {
		return (
			<button className={this.getStyle()}
					onClick={() => this.props.onClick()}
					onMouseEnter={() => this.toggleHover()}
					onMouseLeave={() => this.toggleHover()} >
			</button>
		);
	}
}

export default Chip;
