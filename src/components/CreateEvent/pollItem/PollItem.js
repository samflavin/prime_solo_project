import React, { Component } from 'react';
import { connect } from 'react-redux';

class PollItem extends Component {


    // // sends to details route
    // handleClick = (event) => {
    //     console.log('you clicked', this.props.item.id);
    //     this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.item.id });
    //     this.props.history.push('/details');

    // }



    render() {
       
        return (
            <div>
               {this.props.options.map((item, i) => 
                <p>Option {i+1}: {item}</p>
                )}
                {/* {JSON.stringify(this.props.options)} */}
            </div>
        );
    }
}
const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(PollItem);
