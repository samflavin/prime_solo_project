import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`


class UserPage extends Component {




  handleClick = () => {
    //this.props.dispatch({ type: 'NEW_EVENT', payload: this.props.user.id })

    this.props.history.push('/description');
  }

  render() {

    return(


  <div >
    <h1 id="welcome">
      Welcome, { this.props.user.username }!
    </h1>
    {JSON.stringify(this.props)}

    <p>Your ID is: {this.props.user.id}</p>
    <main className="App">
    &nbsp;
    <button onClick={this.handleClick}>Create an Event!</button>
    &nbsp;
    </main>
    &nbsp;
    <LogOutButton className="log-in" />
  </div>
  
    )
  }
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
