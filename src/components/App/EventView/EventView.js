import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        width: '200px',
        height: '150px',
        marginLeft: '4px',
        marginBottom: '20px',
        marginTop: '20px'

    },
    header: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        width: '200px',
        height: '70px',
        marginLeft: '1px',
        marginRight: '1px',
        marginBottom: '20px',
        marginTop: '20px',
        
    },
});




class EventView extends Component {

   
    componentDidMount() { 
        console.log('user id', this.props.reduxStore.user.id)
    this.props.dispatch({ type: 'FETCH_EVENTLIST', payload: this.props.reduxStore.user.id });
    this.props.dispatch({ type: 'FETCH_INVITATIONLIST', payload: this.props.reduxStore.user.id });
    this.props.dispatch({ type: 'GET_DESCRIPTION', payload: this.props.reduxStore.user.id });


    }

    handleClick = () => {
        this.props.history.push(`/event/${this.props.reduxStore.event}`);
    }

    handleBack = () => {

        // Then programmatically  nav back to poll
        this.props.history.push('/home');
    }

 

    view = (event) => {
        console.log('youve clicked this event', event)
        this.props.history.push(`/event/num/${event.id}`);
    }




    render() {
        const { classes } = this.props;

        return (
            <div>
                <center><Paper className={classes.header}>
                <h3><PeopleIcon></PeopleIcon><PeopleIcon></PeopleIcon><PeopleIcon></PeopleIcon><PeopleIcon></PeopleIcon></h3>
            <h4>Current Events:</h4>
                </Paper ></center>
                
                <center><Paper style={{overflow: 'auto' }} className={classes.root}>
                         <h5>My Events</h5>
                <ul>
                    {this.props.reduxStore.currentEvent.map((item, i) =>
                        <Link to={`/view/${item.id}`}> <li key={i}>{item.event_name}</li></Link>
                    )}
                </ul>
                </Paper></center>
            
               <center>
                <Paper style={{ overflow: 'auto' }} className={classes.root}>
                        <h5>My Invitations</h5>
                <ul>
                    {this.props.reduxStore.invitations.map((item, i) =>
                        <Link to={`/view/${item.event_id}`}> <li key={i}>{item.event_name}</li></Link>
                    )}
                </ul>
                </Paper>
                </center> 
               
                <hr />
                &nbsp;
            <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
                &nbsp;

            </div>
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default withStyles(styles)(connect(putReduxStoreOnProps)(EventView));