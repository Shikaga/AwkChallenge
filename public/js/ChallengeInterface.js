/** @jsx React.DOM */
ChallengeInterface = React.createClass({
	rawToColumnData: function(rawData) {
		return rawData.map(function(row) {
			return row.trim().split(/ +/)
		})
	},
	getInitialState: function() {
		return {
			calculatedData: this.rawToColumnData([""])
		}
	},
	dataSetsAreEqual: function(data1, data2) {
		if (data1.length == data2.length) {
			for (var i=0; i < data1.length; i++) {
				var data1Row = data1[i];
				var data2Row = data2[i];
				if (data1Row.length == data2Row.length) {
					for (var j=0; j < data1Row.length; j++) {
						var data1Cell = data1Row[j];
						var data2Cell = data2Row[j];
						if (data1Cell === data2Cell) {

						} else {
							return false;
						}
					}
				} else {
					return false;
				}
			}
		} else {
			return false;
		}
		return true;
	},
	runAwk: function(awk) {
		var sample_input = this.props.challenge.rawData.join("\n");
		var awk = run_web_awk( awk, sample_input ) ;
		var calculatedData = this.rawToColumnData(awk.stdout.trim().split("\n"))

		this.setState({
			calculatedData: calculatedData
		})

		if (this.dataSetsAreEqual(this.rawToColumnData(this.props.challenge.expectedData), calculatedData)) {
			this.props.onChallengeComplete();
		}
	},
	render: function() {
		var sourceData = this.rawToColumnData(this.props.challenge.rawData);
		var expectedData = this.rawToColumnData(this.props.challenge.expectedData);
		var calculatedData = this.state.calculatedData;

		var initialAwk = this.props.challenge.initialAwk;
		var solutionAwk = this.props.challenge.solutionAwk;
		return (
			<div className="row">
				<div className="col-md-6">
					<div className="panel panel-default">
						<div className="panel-body">
							<h2>Raw Data</h2>
							<DataTable data={sourceData}/>
							<h2>Code</h2>
							<AwkInputBox solutionAwk={solutionAwk} initialAwk={initialAwk} onRun={this.runAwk}/>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="panel panel-default">
						<div className="panel-body">
							<h2>Your Target</h2>
							<ComparisonTable expectedData={expectedData} actualData={calculatedData} />
						</div>
					</div>
				</div>
			</div>
			)
	}
});