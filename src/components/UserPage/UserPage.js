import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import {Link} from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    width: '200px',
    height: '150px',
    marginLeft: '5px',
    marginBottom: '50px',
    marginTop: '50px',
    overflow: 'auto',
    
  },
  welcome: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    width: '200px',
    height: '70px',
    marginLeft: '5px',
    marginBottom: '50px',
    marginTop: '50px',
  },
});




class UserPage extends Component {


 

  componentDidMount = () => {
    console.log('user id ', this.props.user.id)
    this.props.dispatch({ type: 'FETCH_CURRENTEVENT', payload: this.props.user.id});
    this.props.dispatch({ type: 'FETCH_INVITATIONS', payload: this.props.user.id });


  }


  handleClick = () => {

    this.props.history.push('/description');
  };


  render() {
    const { classes } = this.props;


    return(
      <>
    <div>
   <center><Paper className={classes.welcome}>
    <h2 id="welcome">
            <PeopleIcon></PeopleIcon>  Welcome, {this.props.user.username}!  <PeopleIcon></PeopleIcon>
    </h2>
          </Paper></center>

    <main className="App">
            <center><Paper className={classes.root}>
              &nbsp;
              <Link to={'/event'}>You currently have {this.props.state.currentEvent.length > 0 && this.props.state.currentEvent[0].count} active events!</Link>
              <p></p>
              <Link to={'/event'}>You currently have {this.props.state.invitations.length > 0 && this.props.state.invitations[0].count} active invitations!</Link>

              &nbsp;
           <p></p>
            </Paper></center>
            
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
export default withStyles(styles)(connect(mapStateToProps)(UserPage));
