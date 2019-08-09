import React, { Component } from 'react';
import { connect } from 'react-redux';



class Submit extends Component {

    handleClick = () => {
        // Do javascript fun stuff?
        alert('Congratulations Youve just created a new event!');

        // Then programmatically  nav back to home
        this.props.history.push('/home');
    }

    handleBack = () => {
        // Do javascript fun stuff?
        alert('Going back');

        // Then programmatically  nav back to home
        this.props.history.push('/addGuest');
    }
    render() {
        return (
            <div>

                <h1>Review and Submit</h1>
                
                {JSON.stringify(this.props.reduxStore)}
            <div>
                    {/* <p> poll:{this.props.reduxStore.poll}</p> 
                    <p> description:{this.props.reduxStore.description}</p> 
                    <p> event:{this.props.reduxStore.event}</p>  */}
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