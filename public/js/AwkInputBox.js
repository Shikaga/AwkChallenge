/** @jsx React.DOM */

AwkInputBox = React.createClass({
	getInitialState: function() {
		return {value: this.props.initialAwk};
	},
	handleChange: function(event) {
		this.setState({value: event.target.value});
	},
	handleRun: function(event) {
		this.props.onRun(this.state.value)
	},
	setSolution: function() {
		this.setState({
			value: this.props.solutionAwk
		})
	},
	render: function() {
		var value = this.state.value;
		var buttonStyle = {
			height: "100%"
		}
		var textareaStyle = {
			marginTop: "7px",
			marginBottom: "7px",
		}
		return (
			<div>
				<div className="input-group">
					<textarea style={textareaStyle} className="form-control" type="text" value={value} onChange={this.handleChange}></textarea>
					<span className="input-group-btn">
						<button style={buttonStyle} className="btn btn-default" type="button" onClick={this.handleRun}>Go!</button>
		 			</span>
				</div>
				<button className="btn btn-danger" onClick={this.setSolution}>Get Solution</button>
			</div>
		)
	}
});