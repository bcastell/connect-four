import React from 'react';
import Grid from './Grid';
import Drop from './Drop';
import Style from '../stylesheets/main.scss';

class App extends React.Component {
	render() {
		return (
			<div>
				<Drop />
				<Grid />
			</div>
		);
	}
}

export default App;
