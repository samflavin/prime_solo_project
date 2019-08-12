import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`


class UserPage extends Component {


  componentDidMount = () => {
    console.log('user id ', this.props.user.id)
    this.props.dispatch({ type: 'FETCH_CURRENTEVENT', payload: this.props.user.id});

  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.user.id !== prevProps.user.id) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  handleClick = () => {

    this.props.history.push('/description');
  }

  render() {

    return(
      <>
    <div>
    <h2 id="welcome">
      Welcome, { this.props.user.username }!
    </h2>
    {JSON.stringify(this.props.state)}

    <p>Your ID is: {this.props.user.id}</p>
    <p>You currently have {this.props.state.currentEvent.length>0 && this.props.state.currentEvent[0].count} active events!</p>
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
