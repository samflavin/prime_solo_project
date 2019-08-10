import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



class Submit extends Component {

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Congratulations Youve just created a new event!');
        this.props.history.push('/home');
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_DESCRIPTION', payload:this.props.match.params.id});

    }

    handleBack = () => {
        // Do javascript fun stuff?
        alert('Going back');

        // Then programmatically  nav back to home
        this.props.history.push('/addGuest');
    }


    // parser = (options) => {
    //     let newArray = [];
    //     newArray.push(options);
    //     console.log(' JSON parsing shit', JSON.parse(newArray))
    //     return JSON.parse(newArray)
    // }

    
    render() {
        console.log(this.props.reduxStore.description)
        return (
            <div>

                <h1>Review and Send</h1>
                
                {JSON.stringify(this.props.reduxStore)}
            <div>
                    <p> Welcome to {this.props.reduxStore.user.username}'s Event: {this.props.reduxStore.description.event_name} !</p> 

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
                    {/* Options:{this.props.reduxStore.poll.map((item, i) =>

                 

                )} */}
                </ul>
                <hr />
            </div>

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


export default connect(putReduxStoreOnProps)(Submit);