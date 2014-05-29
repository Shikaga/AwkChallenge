/** @jsx React.DOM */
MissionCompleteAlert = React.createClass({
  okClicked: function() {
    this.props.nextMission()
  },
  cancelClicked: function() {

  },
  render: function() {
    return (
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">Success</h4>
            </div>
            <div className="modal-body">
              <p>You completed the mission! Would you like to try the next one?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.cancelClicked}>Nope, I wanna play around a bit first</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.okClicked}>Give me my next challenge!</button>
            </div>
          </div>
        </div>
    )
  }
})

