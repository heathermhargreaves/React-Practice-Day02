import React from "react";

export default React.createClass({
	render() {
		return (
			<div>
				<h1>{this.props.temp}</h1>
				<h1>{this.props.weather}</h1>
			</div>
		)	
	}
})
