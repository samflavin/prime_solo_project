import React, { Component } from 'react';
import { connect } from 'react-redux';



class Submit extends Component {

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Congratulations Youve just created a new event!');

        // Then programmatically  nav back to home
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
    render() {
        console.log(this.props.reduxStore.description)
        return (
            <div>

                <h1>Review and Submit</h1>
                
                {/* {JSON.stringify(this.props.reduxStore)} */}
            <div>
                    <p> Welcome to {this.props.reduxStore.user.username}'s Event, {this.props.reduxStore.description.event_name} !</p> 

                    <p> description:{this.props.reduxStore.description.description}</p> 
                    <ul> GuestList:
                        <hr />
                    {this.props.reduxStore.invitees.map((item, i) =>
                       
                            <li key={i}>{item.username}</li>
                        
                       
                    )}
                    </ul>
                    <hr />
                    <ul> Poll:
                    {this.props.reduxStore.poll.map((item, i) =>

                        <li key={i}>{item.question}</li>

                    )}
                    </ul>
                     
                <ul> 
                    Options:{this.props.reduxStore.poll.map((item, i) =>

                    <li>{item.options}</li>

                )}
                </ul>
                <hr />
            </div>

                &nbsp;
            <button onClick={this.handleBack}>Back</button>
                &nbsp;
            <button onClick={this.handleClick}>CONFIRM</button>


            </div>
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(Submit);