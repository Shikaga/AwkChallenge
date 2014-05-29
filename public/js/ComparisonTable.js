/** @jsx React.DOM */
ComparisonTable = React.createClass({
	getComparisonTable: function(expectedData, actualData) {
		var maxRows = _.max([expectedData.length, actualData.length])
		var comparisonData = [];
		for (var i=0; i < maxRows; i++) {
			var expectedRow = expectedData[i] || [];
			var actualRow = actualData[i] || [];
			var maxCells = _.max([actualRow.length, expectedRow.length])

			var comparisonRow = [];
			for (var j=0; j < maxCells; j++) {
				var expectedCell = expectedRow[j] || "";
				var actualCell = actualRow[j] || "";
				comparisonRow.push({data: actualCell, equal: actualCell === expectedCell});
			}
			comparisonData.push(comparisonRow);
		}
		return comparisonData;
	},
	render: function() {
		var comparisonData = this.getComparisonTable(this.props.expectedData, this.props.actualData);

		var expectedDataNodes = this.props.expectedData.map(function(row) {
			return <DataRow row={row}></DataRow>;
		});
		var actualDataNodes = comparisonData.map(function(row) {
			return <ComparisonRow row={row}></ComparisonRow>
		});

		var maxRows = _.max([expectedDataNodes.length, actualDataNodes.length]);
		var comparisonDataNodes = [];
		for (var i=0; i < maxRows; i++) {
			comparisonDataNodes.push(expectedDataNodes[i]);
			comparisonDataNodes.push(actualDataNodes[i]);
		}


		return (
		<table className="table table-striped">
			<thead>
			</thead>
			<tbody>
				{comparisonDataNodes}
			</tbody>
		</table>
	);
	}
});