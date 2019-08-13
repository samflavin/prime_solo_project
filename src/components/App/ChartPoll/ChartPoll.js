import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextFields from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class ChartPoll extends Component {


    render() {

        return (
            <>
            <div className="poll">
                <h4>Poll Question:</h4>
                {this.props.reduxStore.poll.map((item, i) =>
                    <>
                        <p key={i}>{item.question}</p>
                    </>
                )}
            </div>
            <div className="options">
                <h6>Poll Options:</h6>

                {this.props.reduxStore.options.map((item, i) =>
                    <>
                        <p key={i}>{i + 1}.  {item.option}   <Button variant="contained" color="primary">Vote</Button> </p>
                        <p></p>
                    </>
                )}

            </div>
            </>
        );
    }
}
const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(ChartPoll);
