/** @jsx React.DOM */
ComparisonRow = React.createClass({

	render: function() {
		var row = this.props.row || [];
		var tableCells = row.map(function (data) {
			var comparisonStyle = {};
			if (!data.equal) {
				comparisonStyle.backgroundColor = "lightcoral"
			} else {
				comparisonStyle.backgroundColor = "lightgreen"
			}
			return <td style={comparisonStyle}>{data.data}</td>;
		});
			return(
				<tr>
					{tableCells}
				</tr>
			)
		}
});