import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import constants from './../constants';
const { c } = constants;
import { addTicket } from './../actions';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addTicket(_names.value, _location.value, _issue.value));
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='date'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='location'
          ref={(input) => {_location = input;}}/>
        <input
          id='issue'
          placeholder='time'
          ref={(input) => {_issue = input;}}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default connect()(NewTicketForm);