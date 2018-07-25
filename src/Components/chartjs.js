import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {generateChartData} from '../helpers/dataGenerator';
import moment from 'moment';
import 'chartjs-plugin-zoom';

class chartjs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: generateChartData()
    }
  }

  componentDidMount() {
    console.log(this.refs.linechart.chartInstance);
    this.refs.linechart.chartInstance.zoom.onZoom = () => {
      console.log('zoom');
    }
  }

  reset = () => {
    this.refs.linechart.chartInstance.resetZoom();
  }

  render() {
    const tooltipsTitle = (data) => {
      return moment(data[0].xLabel).format('k:mm MMM D, YYYY');
    }

    const buildDataset = (data, color, label) => {
      const bgColor = 'rgba(32, 168, 216, 0.1)';
      return {
        label: label,
        fill: true,
        lineTension: 0,
        borderColor: color,
        borderWidth: 2,
        backgroundColor: bgColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: color,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data
      }
    }

    const buildLine = (data) => {
      return {
        labels: data.map(item => item.date),
        datasets: [buildDataset(data.map(item => item.visits), 'rgba(32, 168, 216, 1)', 'visits')]
      }
    }

    const line = buildLine(this.state.data);

    return (
      <div style={{height: '400px'}}>
        <Line data={line}
          ref="linechart"
          redraw={true}
          options={{
            maintainAspectRatio: false,
            animation: {
              duration: 0
            },
            hover: {
              animationDuration: 0
            },
            scales: {
              xAxes: [{
                type: 'time',
                parser: 'k:mm MMM D, YYYY'
              }]
            },
            legend: {
              display: false,
              position: 'bottom',
              labels: {boxWidth: 5}
            },
            tooltips: {
              callbacks: {
                title: tooltipsTitle,
              }
            },
            zoom: {
              enabled: true,
              // drag: true,
              mode: 'x'
            },
            pan: {
              enabled: true,
              mode: 'x'
            },
            onClick: (e)=>{console.log(e);}
          }}
        />
        <button onClick={this.reset.bind(this)}>reset</button>
      </div>
    );
  }
}

export default chartjs;
