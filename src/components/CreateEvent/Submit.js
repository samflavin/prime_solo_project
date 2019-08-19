import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        width: '380px',
        height: '200px',
        marginLeft: '5px',
        marginBottom: '50px',
        marginTop: '50px',
        overflow: 'auto',

    },
    header: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        width: '380px',
        height: '70px',
        marginLeft: '5px',
        marginBottom: '50px',
        marginTop: '50px',
        overflow: 'auto',

    },
});


class Submit extends Component {

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Congratulations Youve just created a new event!');
        this.props.history.push('/home');
        this.props.dispatch({ type: 'SEND_TEXT' });

    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_DESCRIPTION', payload:this.props.match.params.id});
        this.props.dispatch({ type: 'FETCH_OPTIONS', payload: this.props.reduxStore.poll[0].id });


    }

    handleBack = () => {
        // Do javascript fun stuff?
        alert('Going back');

        // Then programmatically  nav back to home
        this.props.history.push('/addGuest');
    }



    
    render() {
        const { classes } = this.props;        return (
            <div>
                <center><Paper className={classes.header} > 
                <h1>Review and Send</h1>
                </Paper></center>

                {/* {JSON.stringify(this.props.reduxStore.poll)} */}
                <center><Paper className={classes.root} > 
            <div>
                    <h4> Welcome to {this.props.reduxStore.user.username}'s Event: {this.props.reduxStore.description.event_name} !</h4> 

                    <p> description:{this.props.reduxStore.description.description}</p> 
                    <hr />
                    <ul> GuestList:
                    {this.props.reduxStore.invitees.map((item, i) =>
                       
                            <li key={i}>{item.username}</li>
                        
                    )}
                    </ul>
                    <hr />
                    <ul> Poll:
                    {this.props.reduxStore.poll.map((item, i) =>
                        <>
                        <li key={i}>Q:{item.question}</li>
                        
                        </>
                    )}
                    </ul>
                     
                <ul> 
                    Options:{this.props.reduxStore.options.map((item, i) =>
                    <li key={i}>{i + 1}: {item.option}</li>
                )}
                </ul>
                <hr />
            </div>
            </Paper></center>
                &nbsp;
            <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
                &nbsp;
                 <Button variant="contained" color="secondary" onClick={this.edit}>Edit</Button>
                &nbsp;
            <Button variant="contained" color="primary" onClick={this.handleClick}>Send</Button>


            </div>
            
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default withStyles(styles)(connect(putReduxStoreOnProps)(Submit));