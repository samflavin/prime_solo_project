import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`


class UserPage extends Component {




  handleClick = () => {

    this.props.history.push('/description');
  }

  render() {

    return(
      <>

      <aside class="mdc-drawer">
        <div class="mdc-drawer__content">
          <nav class="mdc-list">
            <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
              <span class="mdc-list-item__text">Inbox</span>
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
              <span class="mdc-list-item__text">Outgoing</span>
            </a>
            <a class="mdc-list-item" href="#">
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
              <span class="mdc-list-item__text">Drafts</span>
            </a>
          </nav>
        </div>
      </aside>
      <>
  <div >
    <h2 id="welcome">
      Welcome, { this.props.user.username }!
    </h2>
    {JSON.stringify(this.props.reduxStore)}

    <p>Your ID is: {this.props.user.id}</p>
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
  </>
    )
  }
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state,reduxStore) => ({
  user: state.user,
  reduxStore
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
