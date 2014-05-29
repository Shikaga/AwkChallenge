/** @jsx React.DOM */
CompletePanel = React.createClass({
	returnToStartClicked: function() {
		this.props.returnToStartClicked();
	},
	render: function() {
		return (
			<div className="jumbotron">
			  <h1>Congratulations!</h1>
			  <p>You have completed the Awk Challenge! You should now the basic knowledge of awk that will allow
			  you to do incredible things with data.</p>
			  <p>If you would like to use awk in your browser more, check out <a href="http://crashcourse.housegordon.org/webawk/">WebAwk</a></p>
			  <p><a className="btn btn-primary btn-lg" role="button" onClick={this.props.returnToStartClicked}>Return to Start!</a></p>
			</div>
			)
	}
});