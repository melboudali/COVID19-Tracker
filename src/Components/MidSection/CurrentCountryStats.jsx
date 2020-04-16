import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_spiritedaway from '@amcharts/amcharts4/themes/spiritedaway';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

const CurrentCountryStats = ({
  countriesData: { currentHistory, currentCountry, loading }
}) => {
  let myData = [];
  let cases = [];
  let deaths = [];
  let recovered = [];
  const [getData, setData] = useState([]);
  am4core.useTheme(am4themes_spiritedaway);
  am4core.useTheme(am4themes_animated);

  const swapData = chart => {
    for (let [key, value] of Object.entries(currentHistory.timeline.cases)) {
      let data = { date: `${key}`, cases: `${value}` };
      cases.push(data);
    }
    for (let [key, value] of Object.entries(currentHistory.timeline.deaths)) {
      let data = { date: `${key}`, deaths: `${value}` };
      deaths.push(data);
    }
    for (let [key, value] of Object.entries(
      currentHistory.timeline.recovered
    )) {
      let data = { date: `${key}`, recovered: `${value}` };
      recovered.push(data);
    }
    if (cases.length > 0 && deaths.length > 0 && recovered.length > 0) {
      for (let c = 0; c < cases.length; c++) {
        myData.push({
          date: cases[c].date,
          Cases: cases[c].cases,
          Deaths: deaths[c].deaths,
          Recovered: recovered[c].recovered
        });
      }
      setData([...myData]);
      chart.data = [...myData];
    }
  };

  useEffect(() => {
    if (currentHistory !== null && !loading) {
      let chart = am4core.create('chartdiv', am4charts.XYChart);
      swapData(chart);
      // chart.data = [
      //   {
      //     year: '1994',
      //     cars: 1587,
      //     motorcycles: 650,
      //     bicycles: 121
      //   },
      //   {
      //     year: '1995',
      //     cars: 1567,
      //     motorcycles: 683,
      //     bicycles: 146
      //   },
      //   {
      //     year: '1996',
      //     cars: 1617,
      //     motorcycles: 691,
      //     bicycles: 138
      //   },
      //   {
      //     year: '1997',
      //     cars: 1630,
      //     motorcycles: 642,
      //     bicycles: 127
      //   },
      //   {
      //     year: '1998',
      //     cars: 1660,
      //     motorcycles: 699,
      //     bicycles: 105
      //   },
      //   {
      //     year: '1999',
      //     cars: 1683,
      //     motorcycles: 721,
      //     bicycles: 109
      //   },
      //   {
      //     year: '2000',
      //     cars: 1691,
      //     motorcycles: 737,
      //     bicycles: 112
      //   },
      //   {
      //     year: '2001',
      //     cars: 1298,
      //     motorcycles: 680,
      //     bicycles: 101
      //   },
      //   {
      //     year: '2002',
      //     cars: 1275,
      //     motorcycles: 664,
      //     bicycles: 97
      //   },
      //   {
      //     year: '2003',
      //     cars: 1246,
      //     motorcycles: 648,
      //     bicycles: 93
      //   },
      //   {
      //     year: '2004',
      //     cars: 1318,
      //     motorcycles: 697,
      //     bicycles: 111
      //   },
      //   {
      //     year: '2005',
      //     cars: 1213,
      //     motorcycles: 633,
      //     bicycles: 87
      //   },
      //   {
      //     year: '2006',
      //     cars: 1199,
      //     motorcycles: 621,
      //     bicycles: 79
      //   },
      //   {
      //     year: '2007',
      //     cars: 1110,
      //     motorcycles: 210,
      //     bicycles: 81
      //   },
      //   {
      //     year: '2008',
      //     cars: 1165,
      //     motorcycles: 232,
      //     bicycles: 75
      //   },
      //   {
      //     year: '2009',
      //     cars: 1145,
      //     motorcycles: 219,
      //     bicycles: 88
      //   },
      //   {
      //     year: '2010',
      //     cars: 1163,
      //     motorcycles: 201,
      //     bicycles: 82
      //   },
      //   {
      //     year: '2011',
      //     cars: 1180,
      //     motorcycles: 285,
      //     bicycles: 87
      //   },
      //   {
      //     year: '2012',
      //     cars: 1159,
      //     motorcycles: 277,
      //     bicycles: 71
      //   }
      // ];

      chart.dateFormatter.inputDateFormat = 'dd/MM/yy';
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      dateAxis.startLocation = 0.5;
      dateAxis.endLocation = 0.5;
      dateAxis.baseInterval = {
        timeUnit: 'date',
        count: 1
      };

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = 'date';
      series.name = 'Recovered';
      series.dataFields.valueY = 'Recovered';
      series.tooltipHTML =
        "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
      series.tooltipText = '[#000]{valueY.value}[/]';
      series.tooltip.background.fill = am4core.color('#FFF');
      series.tooltip.getStrokeFromObject = true;
      series.tooltip.background.strokeWidth = 3;
      series.tooltip.getFillFromObject = false;
      series.fillOpacity = 0.6;
      series.strokeWidth = 2;
      series.stacked = true;

      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.name = 'Deaths';
      series2.dataFields.dateX = 'date';
      series2.dataFields.valueY = 'Deaths';
      series2.tooltipHTML =
        "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
      series2.tooltipText = '[#000]{valueY.value}[/]';
      series2.tooltip.background.fill = am4core.color('#FFF');
      series2.tooltip.getFillFromObject = false;
      series2.tooltip.getStrokeFromObject = true;
      series2.tooltip.background.strokeWidth = 3;
      series2.sequencedInterpolation = true;
      series2.fillOpacity = 0.6;
      series2.stacked = true;
      series2.strokeWidth = 2;

      let series3 = chart.series.push(new am4charts.LineSeries());
      series3.name = 'Cases';
      series3.dataFields.dateX = 'date';
      series3.dataFields.valueY = 'Cases';
      series3.tooltipHTML =
        "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
      series3.tooltipText = '[#000]{valueY.value}[/]';
      series3.tooltip.background.fill = am4core.color('#FFF');
      series3.tooltip.getFillFromObject = false;
      series3.tooltip.getStrokeFromObject = true;
      series3.tooltip.background.strokeWidth = 3;
      series3.sequencedInterpolation = true;
      series3.fillOpacity = 0.6;
      series3.defaultState.transitionDuration = 1000;
      series3.stacked = true;
      series3.strokeWidth = 2;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.xAxis = dateAxis;
      chart.scrollbarX = new am4core.Scrollbar();

      // Add a legend
      chart.legend = new am4charts.Legend();
      chart.legend.position = 'top';

      // axis ranges
      let range = dateAxis.axisRanges.create();
      range.date = new Date(2020, 1,1);
      // range.endDate = new Date(2003, 0, 1);
      range.axisFill.fill = chart.colors.getIndex(7);
      range.axisFill.fillOpacity = 0.2;

      range.label.text = 'Fines for speeding increased';
      range.label.inside = true;
      range.label.rotation = 90;
      range.label.horizontalCenter = 'right';
      range.label.verticalCenter = 'bottom';

      let range2 = dateAxis.axisRanges.create();
      range2.date = new Date(2020, 1,1);
      range2.grid.stroke = chart.colors.getIndex(7);
      range2.grid.strokeOpacity = 0.6;
      range2.grid.strokeDasharray = '5,2';

      range2.label.text = 'Motorcycle fee introduced';
      range2.label.inside = true;
      range2.label.rotation = 90;
      range2.label.horizontalCenter = 'right';
      range2.label.verticalCenter = 'bottom';
    }
    // eslint-disable-next-line
  }, [currentHistory, loading]);

  return <div id='chartdiv' className='graph'></div>;
  // <div>
  {
    /* {getData.length === 0 || loading ? (
        <div className='Spinner'>
          <Spinner animation='border' role='status' variant='success'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        )} */
  }
  // </div>
};

CurrentCountryStats.propTypes = {
  currentHistory: PropTypes.object
};

const mapStateToProps = state => ({
  countriesData: state.Data
});

export default connect(mapStateToProps)(CurrentCountryStats);
