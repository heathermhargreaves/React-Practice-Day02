import React from "react";

export default React.createClass({
	componentWillMount() {
		// console.log("will mount - child");
	},
	componentDidMount() {
		// console.log("did mount - child");
	},
	componentWillUnmount() {
		// console.log("will unmount - child");
	},
	componentWillReceiveProps(nextProps) {
		console.log("nextProps", this.props.name);
		console.log(nextProps.name);
	},
	shouldComponentUpdate(nextProps) {
		return true;
	},
	render() {
		return (
			<h1>Child Component</h1>
		)
	}
})
