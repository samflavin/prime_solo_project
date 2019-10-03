import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFields from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        width: '300px',
        height: '600px',
        marginLeft: '45px',
        marginBottom: '10px',
        marginTop: '10px'
       
    },
});

class ChatBar extends Component {

    state = {
        newItem: {
            msg: '',
            user_id: this.props.user_id,
            event_id: this.props.event_id,
        }
    }


    handleChangeFor = (event, property) => {
        this.setState({
            newItem: {
                ...this.state.newItem,
                [property]: event.target.value,
            }
        })
    }

    send = () => {
        this.props.dispatch({ type: 'PREP_MSG', payload: this.state.newItem });
        this.setState({
            newItem: {
                msg: '',
                user_id: this.props.user_id,
                event_id: this.props.event_id,
            } 
        })
    }

    render() {
    const { classes } = this.props;

        return (
            <>
            <Paper style={{ maxHeight: 500, overflow: 'auto' }} className={classes.root}>
            <div className="chatBar">
                <section>
                        <div className="messages">
                        <h4>Chat:</h4>
                        {this.props.reduxStore.messages.map((item, i) =>
                
                            <p key={i}>{item.username}: {item.messages}</p>   
                        )}
                    </div>
                </section>
            <TextFields placeholder="Type something..." type="text" value={this.state.newItem.msg}
            onChange={(event) => this.handleChangeFor(event, 'msg')} /> <p></p>
            <Button variant="contained" color="primary" onClick={() => this.send(this.state.newItem)}>Send</Button> 
            </div>
            </Paper>
            </>
        );
    }
}
const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default withStyles(styles)(connect(putReduxStoreOnProps)(ChatBar));
