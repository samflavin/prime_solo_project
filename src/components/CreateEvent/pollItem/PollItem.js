import React, { Component } from 'react';
import { connect } from 'react-redux';




// GalleryItem is not getting anything from redux, getting props from parent
class PollItem extends Component {


    // // sends to details route
    // handleClick = (event) => {
    //     console.log('you clicked', this.props.item.id);
    //     this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.item.id });
    //     this.props.history.push('/details');

    // }



    render() {
        console.log(this.props.options);
        // //define item to make code more concise
        // let item = this.props.item;
        return (
            <div>
               {this.props.options.map(item => 
                <p>{item}</p>
                )}
                {JSON.stringify(this.props.options)}
            </div>
        );
    }
}
const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(PollItem);
