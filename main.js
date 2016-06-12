/*globals ng:false */
"use strict";

(function(chartApp){
  chartApp.AppComponent = ng.core.Component({
    selector: 'angular-chart',
    template: '<div class="container"><h1>Revenue of Top Tech Companies</h1><div class="actions"><button (click)="yearChange(2014)" [ngClass] = "{selected: selectedYear== 2014}">2014</button><button (click)="yearChange(2015)" [ngClass] = "{selected: selectedYear== 2015}">2015</button></div><div id ="chart-container"></div></div>'
  }).Class({
    constructor: function(){
      var chartComp = this;
      chartComp.selectedYear = 2014;

      chartComp.dataSet = {
        "2014": [{
          "label": "Amazon",
          "value": "88.99"
        }, {
          "label": "Apple",
          "value": "182.8"
        }, {
          "label": "Facebook",
          "value": "12.47"
        }, {
          "label": "Google",
          "value": "65.67"
        }, {
          "label": "Microsoft",
          "value": "86.83"
        }],
        "2015": [{
          "label": "Amazon",
          "value": "107.01"
        }, {
          "label": "Apple",
          "value": "233.72"
        }, {
          "label": "Facebook",
          "value": "17.93"
        }, {
          "label": "Google",
          "value": "74.54"
        }, {
          "label": "Microsoft",
          "value": "93.58"
        }]
      }
      FusionCharts.ready(function(){
        new FusionCharts({
          "type": "column2d",
          "renderAt": "chart-container",
          "width": "550",
          "height": "400",
          "id": "revenue-chart",
          "dataFormat": "json",
          "dataSource": {
            "chart": {
              "yAxisName": "Revenue (In USD Billion)",
              "yAxisMaxValue": "200",
              "numberPrefix": "$",
              "paletteColors": "#0075c2",
              "bgColor": "#ffffff",
              "showBorder": "0",
              "showLabels": "0",
              "showCanvasBorder": "0",
              "plotBorderAlpha": "10",
              "usePlotGradientColor": "0",
              "plotFillAlpha": "50",
              "showXAxisLine": "1",
              "axisLineAlpha": "25",
              "divLineAlpha": "10",
              "showValues": "1",
              "showAlternateHGridColor": "0",
              "plotSpacePercent": "10",
              "chartBottomMargin": "50",
              "baseFont": "Source Sans Pro",
              "baseFontSize": "16",
              "toolTipColor": "#ffffff",
              "toolTipBorderThickness": "0",
              "toolTipBgColor": "#000000",
              "toolTipBgAlpha": "80",
              "toolTipBorderRadius": "2",
              "toolTipPadding": "10"
            },
            "data": chartComp.dataSet['2014'],
            "annotations": {
              "groups": [{
                "id": "logo-images",
                "xScale": "30",
                "yScale": "30",
                "showBelow": "0",
                "items": [{
                  "type": "image",
                  "url": "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/06/1465735364amazon.jpg",
                  "x": "$dataset.0.set.0.startx + 25",
                  "y": "$dataset.0.set.0.endY + 10"
                }, {
                  "type": "image",
                  "url": "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/06/1465735362apple.jpg",
                  "x": "$dataset.0.set.1.startx + 85",
                  "y": "$dataset.0.set.1.endY + 10"
                }, {
                  "type": "image",
                  "url": "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/06/1465735369facebook.jpg",
                  "x": "$dataset.0.set.2.startx + 20",
                  "y": "$dataset.0.set.2.endY + 10"
                }, {
                  "type": "image",
                  "url": "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/06/1465735358google.jpg",
                  "x": "$dataset.0.set.3.startx + 5",
                  "y": "$dataset.0.set.3.endY + 5"
                }, {
                  "type": "image",
                  "url": "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/06/1465735372microsoft.jpg",
                  "x": "$dataset.0.set.4.startx + 30",
                  "y": "$dataset.0.set.4.endY + 10"
                }]
              }]
            }
          }
        }).render();
      });
    },
    yearChange: function(year){
      var revenueChart = FusionCharts.items['revenue-chart'];
      var chartJson = revenueChart.getChartData('json');
      chartJson.data = this.dataSet[year];
      revenueChart.setChartData(chartJson);
      this.selectedYear = year;
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(chartApp.AppComponent);
  });
})(window.chartApp || (window.chartApp = {}));
