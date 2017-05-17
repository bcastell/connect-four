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
		this.setState({
			hover : !this.state.hover
		});
	}

	render() {
		var chipStyle = "chip";

		if (this.state.hover && this.props.red) {
				chipStyle += " chip-red";
		}

		else if (this.state.hover && !this.props.red) {
				chipStyle += " chip-yellow";
		}

		else {
			chipStyle += " chip-white";
		}

		return (
			<button className={chipStyle}
					onClick={() => this.props.onClick()}
					onMouseEnter={() => this.toggleHover()}
					onMouseLeave={() => this.toggleHover()} >
			</button>
		);
	}
}

export default Chip;
