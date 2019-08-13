import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextFields from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

class ChartPoll extends Component {


    render() {
   
        return (
            <>
            <div>
                <h2>Doughnut Example</h2>
                displayName: 'DoughnutExample';
                <Doughnut data={data} />
            </div>
            <section className="chart">
            <div className="options">
                <h6>Poll Options:</h6>

                {this.props.reduxStore.options.map((item, i) =>
                    <>
                        <p key={i}>{i + 1}.  {item.option}   <Button variant="contained" color="primary">Vote</Button> </p>
                        <p></p>
                    </>
                )}

            </div>
            <div>
             
            </div>
            
            </section>
            </>
        );
    }
}
const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})


export default connect(putReduxStoreOnProps)(ChartPoll);
