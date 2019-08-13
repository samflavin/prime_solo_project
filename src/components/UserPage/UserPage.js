import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import {Link } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';



// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`


class UserPage extends Component {


  componentDidMount = () => {
    console.log('user id ', this.props.user.id)
    this.props.dispatch({ type: 'FETCH_CURRENTEVENT', payload: this.props.user.id});
    this.props.dispatch({ type: 'FETCH_INVITATIONS', payload: this.props.user.id });


  }


  handleClick = () => {

    this.props.history.push('/description');
  }

  render() {

    return(
      <>
    <div>
    <h2 id="welcome">
            <PeopleIcon></PeopleIcon><PeopleIcon></PeopleIcon>  Welcome, {this.props.user.username}!  <PeopleIcon></PeopleIcon><PeopleIcon></PeopleIcon>
    </h2>
    {JSON.stringify(this.props.state)}

    <p>Your ID is: {this.props.user.id}</p>
     &nbsp;
          <Link to={'/event'}>You currently have {this.props.state.currentEvent.length > 0 && this.props.state.currentEvent[0].count} active events!</Link>
          <p></p>
          <Link to={'/event'}>You currently have {this.props.state.invitations.length > 0 && this.props.state.invitations[0].count} active invitations!</Link>

           &nbsp;
           <p></p>
    <main className="App">
    
    &nbsp;
    <Button variant="contained" color="primary" onClick={this.handleClick}>Create an Event!<EventIcon></EventIcon></Button>
    &nbsp;
    </main>
    &nbsp;
    <footer>
    <LogOutButton className="log-in" />
    </footer>
  </div>
  </>

    )
  }
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
  state
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
