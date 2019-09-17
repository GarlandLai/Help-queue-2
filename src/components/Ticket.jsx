import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';

function Ticket(props){
  var myStyle = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'monospace',
    fontSize: '24px',
  };
  var myOtherStyle = {
    fontSize: '15px',
  };
  function handleSavingSelectedTicket(ticketId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_TICKET',
      ticketId: ticketId,
    };
    dispatch(action);
  }

  const ticketInformation =
  <div>
    <h3>{props.location} - {props.names}</h3>
    <h4>{props.formattedWaitTime} ago</h4>
    <hr/>
  </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>

        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);
