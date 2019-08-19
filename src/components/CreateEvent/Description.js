import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextFields from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';




const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        width: '350px',
        height: '350px',
        marginLeft: '1px',
        marginRight: '1px',
        marginBottom: '50px',
        marginTop: '20px',
        overflow: 'auto',

    },
    header: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
        width: '350px',
        height: '100px',
        marginLeft: '1px',
        marginRight: '1px',
        marginBottom: '20px',
        marginTop: '20px',
        overflow: 'auto',

    },
    
});


class Description extends Component {
    

    state = {
        newItem: {
            event_name:'',
            description: '',
            userId: this.props.reduxStore.user.id 
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

    handleClick = () => {
        //dispatch to saga to put description in redux
        this.props.dispatch({ type: 'PREP_DESCRIPTION', payload: this.state.newItem  })
        this.props.history.push('/poll');
    }

    handleBack = () => {

        // Then programmatically  nav back to home
        this.props.history.push('/home');
    }



    render() {
       
        const { classes } = this.props;

        return (
            <div>
                <center><Paper className={classes.header}>
                <h1>Description</h1>
                <h4>Tell your guests about the event to which they're being invited!</h4>
                </Paper ></center>
           <center> <Card className={classes.root}>
                <CardContent>
                <section onSubmit={(event) => this.handleSubmit(event, this.state.newItem)} >

                    <label><span className="required">Name of event:  </span></label>
                    <TextFields type="text" value={this.state.newItem.event_name}
                        onChange={(event) => this.handleChangeFor(event, 'event_name')} />
                </section>
                &nbsp;
                <section onSubmit={(event) => this.handleSubmit(event, this.state.newItem)} >

                    <label><span className="required"></span></label>
                    <textarea type="text" value={this.state.newItem.description}
                        onChange={(event) => this.handleChangeFor(event, 'description')} />
                </section>
                </CardContent >
                </Card>
                </center>
            <footer>
            &nbsp;
            <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
            &nbsp;
            <Button variant="contained" color="primary" onClick={(event) => this.handleClick(event, this.state.newItem)}>Next</Button>
             &nbsp;
            </footer>
            </div>
        )
    }
}


const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default withStyles(styles)(connect(putReduxStoreOnProps)(Description));