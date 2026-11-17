var rootColumnChart = am5.Root.new("ColumnChart");

rootColumnChart.setThemes([
  am5themes_Animated.new(rootColumnChart)
]);


var chartColumnChart = rootColumnChart.container.children.push(am5xy.XYChart.new(rootColumnChart, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX: true
}));


var cursorColumnChart = chartColumnChart.set("cursor", am5xy.XYCursor.new(rootColumnChart, {}));
cursorColumnChart.lineY.set("visible", false);

var xRendererColumnChart = am5xy.AxisRendererX.new(rootColumnChart, { minGridDistance: 30 });
xRendererColumnChart.labels.template.setAll({
  rotation: -90,
  centerY: am5.p50,
  centerX: am5.p100,
  paddingRight: 15
});

xRendererColumnChart.grid.template.setAll({
  location: 1
})

var xAxisColumnChart = chartColumnChart.xAxes.push(am5xy.CategoryAxis.new(rootColumnChart, {
  maxDeviation: 0.3,
  categoryField: "month",
  renderer: xRendererColumnChart,
  tooltip: am5.Tooltip.new(rootColumnChart, {})
}));

var yAxisColumnChart = chartColumnChart.yAxes.push(am5xy.ValueAxis.new(rootColumnChart, {
  maxDeviation: 0.3,
  renderer: am5xy.AxisRendererY.new(rootColumnChart, {
    strokeOpacity: 0.1
  })
}));

var seriesColumnChart = chartColumnChart.series.push(am5xy.ColumnSeries.new(rootColumnChart, {
  name: "Ventas",
  xAxis: xAxisColumnChart,
  yAxis: yAxisColumnChart,
  valueYField: "value",
  sequencedInterpolation: true,
  categoryXField: "month",
  tooltip: am5.Tooltip.new(rootColumnChart, {
    labelText: "{valueY}"
  })
}));

seriesColumnChart.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
seriesColumnChart.columns.template.adapters.add("fill", function(fill, target) {
  return chartColumnChart.get("colors").getIndex(seriesColumnChart.columns.indexOf(target));
});

seriesColumnChart.columns.template.adapters.add("stroke", function(stroke, target) {
  return chartColumnChart.get("colors").getIndex(seriesColumnChart.columns.indexOf(target));
});


// Set data
var dataColumnChart = billingByMonth.map(item => ({
  month: item.month,
  value: item.sales
}));

xAxisColumnChart.data.setAll(dataColumnChart);
seriesColumnChart.data.setAll(dataColumnChart);

seriesColumnChart.appear(1000);
chartColumnChart.appear(1000, 100);