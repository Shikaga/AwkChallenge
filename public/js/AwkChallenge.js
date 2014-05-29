/** @jsx React.DOM */
AwkChallenge = React.createClass({
	STATES: {
		INTRODUCTION: 1,
		QUEST: 2,
		COMPLETE: 3
	},
	getInitialState: function() {
		return {
			state: this.STATES.INTRODUCTION,
			questNumber: 0
		}
	},
	startClicked: function() {
		this.setState({
			state: this.STATES.QUEST
		})
	},
	returnToStartClicked: function() {
		this.setState({
			state: this.STATES.INTRODUCTION
		})
	},
	showMissionCompleteAlert: function() {
		$(".modal").modal()
	},
	nextMission: function() {
		if (this.state.questNumber+1 < Challenges.length) {
			this.setState({
				questNumber: this.state.questNumber+1
			})
		} else {
			this.setState({
				state: this.STATES.COMPLETE
			})
		}
		
	},
	render: function() {
		var challenge = Challenges[this.state.questNumber];

		console.log(this.state.state);
		var questDiv = (
			<div>
				<h1>{challenge.heading}</h1>
				<div className="panel panel-default">
					<div className="panel-body">
						{challenge.questText}
					</div>
				</div>
				<ChallengeInterface challenge={challenge} onChallengeComplete={this.showMissionCompleteAlert}/>
			</div>)
		var visibleDiv = null;
		if (this.state.state === this.STATES.INTRODUCTION) {
			visibleDiv = (<IntroductionPanel startClicked={this.startClicked}/>)
		} else if (this.state.state === this.STATES.QUEST) {
			visibleDiv = (
				<div>
					{questDiv}
					<div className="modal fade">
						<MissionCompleteAlert nextMission={this.nextMission}/>
					</div>
				</div>
				)
		} else if (this.state.state === this.STATES.COMPLETE) {
			visibleDiv = (<CompletePanel returnToStartClicked={this.returnToStartClicked}/>)
		}
		return <div className="container">{visibleDiv}</div>
	}
})