export const generateChartData = () => {
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
