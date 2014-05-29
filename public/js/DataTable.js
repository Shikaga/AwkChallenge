/** @jsx React.DOM */
DataTable = React.createClass({
	render: function() {

	var tableRows = this.props.data.map(function (row) {
		return <DataRow row={row}></DataRow>;
	});

	return (
	<table className="table table-striped">
		<thead>
		</thead>
		<tbody>
			{tableRows}
		</tbody>
	</table>
	);
	}
});