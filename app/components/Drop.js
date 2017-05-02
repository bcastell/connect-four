import React from 'react';
import Chip from './Chip';
import Style from '../stylesheets/main.scss';

class Drop extends React.Component {
	render() {
		return (
			<div className="drop">
				<Chip onClick={() => this.props.onClick()} red={this.props.color} />
				<Chip onClick={() => this.props.onClick()} red={this.props.color} />
				<Chip onClick={() => this.props.onClick()} red={this.props.color} />
				<Chip onClick={() => this.props.onClick()} red={this.props.color} />
				<Chip onClick={() => this.props.onClick()} red={this.props.color} />
				<Chip onClick={() => this.props.onClick()} red={this.props.color} />
				<Chip onClick={() => this.props.onClick()} red={this.props.color} />
			</div>
		);
	}
}

export default Drop;
