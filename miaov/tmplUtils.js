
var addChartIsPie = function(chartTitle, chartData, chartType){
    //console.log(chartData);
    //chartType 'inner'=>有图例文字描述在圆内
    var option;

    //页面呈现百分比设定
    /*var dataSum = 0, percentData = [], percentSum = 0;
     for(var d = 0; d<chartData.length; d++){
     dataSum += chartData[d] == null || chartData[d] == '' ? 0 : chartData[d].value;
     }
     for(var s = 0; s<chartData.length; s++){
     var val = chartData[s] == null || chartData[s] == '' ? 0 : chartData[s].value;
     var floatValStr = parseFloat(parseFloat(val)/dataSum * 100).toFixed(1);
     if(s == chartData.length-1){
     percentData[s] = parseFloat(100-percentSum);
     }else{
     percentData[s] =  parseFloat(floatValStr) ;
     percentSum += percentData[s];
     }
     }
     */
    if ( chartType == 'inner' ) {
        var legendData = [];
        for ( var i = 0; i < chartData.length; i++ ) {
            legendData.push({name: chartData[i].name, icon: 'icon'});
        }
        option = {
            color: ['#77cefa', '#ef826f', '#e0e4e9','#92ca8a','#f6d36b','#d6d4ad'],
            title: {
                text: chartTitle,
                x: 'center',
                padding: 20,
                textStyle:{
                    fontSize:'16',
                    fontWeight:'normal',
                    color:'#282828'
                }
            },
            legend: {
                show: true,
                orient: 'horizontal',
                /*x: 'right',
                 y: 'middle',*/
                bottom: '10%',
                x: 'center',
                data: legendData,
                textStyle:{
                    fontSize:'12',
                    color:'#505050'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)",
                backgroundColor: '#ccc'
            },
            calculable: false,
            animation: false,
            series: [
                {
                    name: chartTitle,
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '60%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#ffffff',
                            label: {
                                show: true,
                                formatter: function (data) {
                                    if (data.value != 0) {
                                        //return (data.percent.toFixed(1) || 0)+'%';
                                        return (data.data.normalValue || (data.percent.toFixed(1) || 0))+'%';
                                        //return  (percentData[data.dataIndex] || 0 ) +'%';
                                    }else{
                                        return '';
                                    }
                                },
                                textStyle:{
                                    fontSize:14,
                                    color:'#505050'
                                }
                            }
                        }
                    },
                    data:  chartData,
                    selectedMode :true,
                    selectedOffset :1
                }
            ]
        };
    }
    else {
        option = {
            color: ['#77cefa', '#ef826f', '#e0e4e9','#92ca8a','#f6d36b','#d6d4ad'],
            title: {
                text: chartTitle,
                x: 'center',
                padding: 20,
                textStyle:{
                    fontSize:'16',
                    fontWeight:'normal',
                    color:'#282828'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)",
                backgroundColor: '#ccc'
            },
            animation: false,
            series: [
                {
                    name: chartTitle,
                    type: 'pie',
                    selectedMode: 'single',
                    //radius: [0, '80%'],
                    radius: [0, '45%'],
                    label: {
                        normal: {
                            //position: 'inner'
                            position: 'outer'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#ffffff',
                            label: {
                                show: true,
                                formatter: function (data) {
                                    //return  (percentData[data.dataIndex] || 0 ) +'%';
                                    if (data.value != 0) {
                                        return data.name +':'+ (data.data.normalValue || (data.percent.toFixed(1) || 0))+'%';+'%';
                                        //return data.name +':'+((data.percent).toFixed(1) || 0)+'%';
                                    }else{
                                        return '';
                                    }
                                },
                                textStyle:{
                                    fontSize:14,
                                    color:'#505050'
                                }
                            }
                        }
                    },
                    data:  chartData,
                    selectedMode :true,
                    selectedOffset :1
                }
            ]
        };
    }
    return option;
};