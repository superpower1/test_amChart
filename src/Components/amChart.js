import React, {Component} from 'react';
const AmCharts = require("@amcharts/amcharts3-react");

class amChart extends Component {
  render() {
    const generateChartData = () => {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 5);
      var visits = 1200;
      for (var i = 0; i < 1000; i++) {
          // we create date objects here. In your data, you can have date strings
          // and then set format of your dates using chart.dataDateFormat property,
          // however when possible, use date objects, as this will speed up chart rendering.
          var newDate = new Date(firstDate);
          newDate.setDate(newDate.getDate() + i);

          visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

          chartData.push({
              date: newDate,
              visits: visits
          });
      }
      return chartData;
    }

    const options = {
        "type": "serial",
        "theme": "light",
        "marginRight": 80,
        "autoMarginOffset": 20,
        "marginTop": 7,
        "dataProvider": generateChartData(),
        "valueAxes": [{
            "axisAlpha": 0.2,
            "dashLength": 1,
            "position": "left"
        }],
        "mouseWheelZoomEnabled": true,
        "graphs": [{
            "id": "g1",
            "balloonText": "[[value]]",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "hideBulletsCount": 50,
            "title": "red line",
            "valueField": "visits",
            "useLineColorForBulletBorder": true,
            "balloon":{
                "drop":true
            }
        }],
        "chartScrollbar": {
            "autoGridCount": true,
            "graph": "g1",
            "scrollbarHeight": 40
        },
        "chartCursor": {
           "limitToGraph":"g1"
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "axisColor": "#DADADA",
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "export": {
            "enabled": true
        }
    };

    return (
      <div>
        <AmCharts.React
          style={{
            width: "100%",
            height: "500px"
          }}
          options={options}
        />
      </div>
    );
  }
}

export default amChart;
