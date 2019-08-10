import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextFields from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';






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
       
      
        return (
            <div>
{/*  {JSON.stringify(this.props.reduxStore)} */}
                <h1>Description</h1>
                <h4>Tell your guests about the event to which they're being invited!</h4>
            <Card>
                <CardContent>
                <section onSubmit={(event) => this.handleSubmit(event, this.state.newItem)} >

                    <label><span className="required">Name of event:</span></label>
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

            &nbsp;
            <Button variant="contained" color="primary" onClick={this.handleBack}>Back</Button>
            &nbsp;
            <Button variant="contained" color="primary" onClick={(event) => this.handleClick(event, this.state.newItem)}>Next</Button>
             &nbsp;
   
            </div>
        )
    }
}


const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(Description);