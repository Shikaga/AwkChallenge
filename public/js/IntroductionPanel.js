/** @jsx React.DOM */
IntroductionPanel = React.createClass({
	startClicked: function() {
		this.props.startClicked();
	},
	render: function() {
		return (
			<div className="jumbotron">
			  <h1>Welcome to AwkChallenge!</h1>
			  <p>AwkChallenge is the fun and simple way to learn the basics of Awk without having to leave
			  the comfort of your browser!</p>
			  <p><a className="btn btn-primary btn-lg" role="button" onClick={this.props.startClicked}>Get Started!</a></p>
			</div>
			)
	}
});