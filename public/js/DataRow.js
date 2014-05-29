/** @jsx React.DOM */
DataRow = React.createClass({

	render: function() {
		var row = this.props.row || [];
		var tableCells = row.map(function (data) {
			return <td key={data}>{data}</td>;
		});
			return(
				<tr>
					{tableCells}
				</tr>
			)
		}
});