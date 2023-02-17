(function ($) {
    "use strict";
    var primarycolor = getComputedStyle(document.body).getPropertyValue('--primarycolor');
    var successcolor = getComputedStyle(document.body).getPropertyValue('--success');
    var infocolor = getComputedStyle(document.body).getPropertyValue('--info');
    var warningcolor = getComputedStyle(document.body).getPropertyValue('--warning');

    var theme = 'light';
    if ($('body').hasClass('dark')) {
        theme = 'dark';
    }
    if ($('body').hasClass('dark-alt')) {
        theme = 'dark';
    }
     if ($('body').hasClass('dark')) {
        am4core.useTheme(am4themes_amchartsdark);
    }
    if ($('body').hasClass('dark-alt')) {
        am4core.useTheme(am4themes_amchartsdark);
    }
    am4core.useTheme(am4themes_animated);
    /////////////////////////////////// ETHEREUM Chart /////////////////////

    var series =
            {
                "monthDataSeries1": {
                    "prices": [31, 40, 28, 51, 42, 109, 100]
                }
            }
    var options = {
        theme: {
            mode: theme
        },
        chart: {

            type: 'area',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        colors: ['#7367f0', '#6e63dc', '#635bb5', '#615b9a'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        series: [{
                name: "STOCK ABC",
                data: series.monthDataSeries1.prices
            }],
        xaxis: {
            show: !1, labels: {
                show: !1
            }
            , axisBorder: {
                show: !1
            }
        },
        yaxis: {
            show: !1
        },
        grid: {
            show: !1, padding: {              
                bottom: -40,
                left: 0,
                right: 0
            }
        },
        legend: {
            horizontalAlign: 'left'
        }
    }

    var chart = new ApexCharts(
            document.querySelector("#eth_apex_area_chart"),
            options
            );
    chart.render();

/////////////////////////////////// Bitcoin Chart /////////////////////
    var series =
            {
                "monthDataSeries1": {
                    "prices": [11, 32, 45, 32, 34, 52, 41]
                }
            }
    var options = {
        theme: {
            mode: theme
        },
        chart: {

            type: 'area',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        colors: ['#28a745', '#37ad52', '#4ac165', '#5fca77', '#7ed492'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        series: [{
                name: "STOCK ABC",
                data: series.monthDataSeries1.prices
            }],
        xaxis: {
            show: !1, labels: {
                show: !1
            }
            , axisBorder: {
                show: !1
            }
        },
        yaxis: {
            show: !1
        },
        grid: {
            show: !1, padding: {
                top: 0,
                bottom: -40,
                left: 0,
                right: 0
            }
        },
        legend: {
            horizontalAlign: 'left'
        }
    }

    var chart = new ApexCharts(
            document.querySelector("#bch_apex_area_chart"),
            options
            );
    chart.render();

/////////////////////////////////// Bitcoin Chart /////////////////////
    var series =
            {
                "monthDataSeries1": {
                    "prices": [11, 32, 45, 32, 34, 52, 41]
                }
            }
    var options = {
        theme: {
            mode: theme
        },
        chart: {

            type: 'area',
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        colors: ['#dc3545', '#d43f4d', '#da5965', '#de6f79', '#e88790'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        series: [{
                name: "STOCK ABC",
                data: series.monthDataSeries1.prices
            }],
        xaxis: {
            show: !1, labels: {
                show: !1
            }
            , axisBorder: {
                show: !1
            }
        },
        yaxis: {
            show: !1
        },
        grid: {
            show: !1, padding: {
                top: 0,
                bottom: -40,
                left: 0,
                right: 0
            }
        },
        legend: {
            horizontalAlign: 'left'
        }
    }

    var chart = new ApexCharts(
            document.querySelector("#stats_apex_area_chart"),
            options
            );
    chart.render();
/********** Visitor By Countries **********/

if ($("#flotChart").length) {
		var d1 = [
				[0,15],
				[1, 18],
				[2, 16],
				[3, 17],
				[4, 19],
				[5, 16],
				[6, 22],
				[7, 19],
				[8, 20],
				[9, 19],
				[10, 24],
				[11, 22],
				[12, 26],
				[13, 24],
				[14, 25],
				[15, 21],
				[16, 23],
				[17, 23],
				[18, 24],
				[19, 24],
				[20, 23],
				[21, 23],
				[22, 20],
				[23, 25],
				[24, 25],
				[24, 26],
				[26, 26],
				[29, 24],
				[30, 25],
				[31, 27],
				[32, 28],
				[33, 28],
				[34, 29],
				[35, 29],
				[36, 30],
				[37, 30],
				[38, 32],
				[39, 32],
				[40, 30],
				[41, 30],
				[42, 28],
				[43, 28],
				[44, 28],
				[45, 32],
				[46, 32],
				[47, 35],
				[48, 38],
				[49, 40],
				[50, 39],
				[51, 42],
				[52, 42],
				[53, 47],
				[54, 47],
				[55, 50],
				[56, 54],
				[57, 56],
				[57, 57],
				[58, 58],
				[59, 55],
				[60, 54],
				[61, 50],
				[62, 52],
				[63, 49],
				[64, 48],
				[65, 47],
				[66, 45],
			];
		var curvedLineOptions = {
			series: {
				curvedLines: {
						active: true,
				},
				shadowSize: 0,
				lines: {
						show: true,
						lineWidth: 2,
						fill: false
				},
			},
			
			grid: {
				borderWidth: 0,
				labelMargin: 0
			},
			yaxis: {
				show: false,
				min: 0,
				max: 80,
				position: "left",
				ticks: [
					[0, '600'],
					[50, '610'],
					[100, '620'],
					[150, '640']
				],
				tickColor: '#e9e9e9',
				tickLength:0,
			},
			xaxis: {
				show: true,
				position: "bottom",
				ticks: [
						[0, 'Jan'],
						[11, 'Feb'],
						[22, 'Mar'],
						[33, 'Apr'],
						[44, 'May'],
						[55, 'Jun'],
						[66, 'Jul']
				],
				tickColor: '#e9e9e9',
			},
			legend: {
				noColumns: 4,
				container: $("#legendContainer"),
			}
		}
		$.plot($("#flotChart"), [{
		data: d1,
		curvedLines: {
			apply: true ,
			tension: 1,
		},
		points: {
			show: false,
			fillColor: '#1f3bb3',
		},
			color: primarycolor, 
		
		lines: {
			show: true, 
			fill: true,
			fillColor: { colors: [{ opacity: 0.01 }, { opacity: 0.3}] }
		},
		label: 'This year',
		stack: true,
		}], curvedLineOptions);
	}




/********** Pie chart with broken down slices **********/

    var pie_variable_height_3d = document.getElementById("pie_variable_height_3d");
    if (pie_variable_height_3d) {

        var chart3d = am4core.create("pie_variable_height_3d", am4charts.PieChart3D);
        chart3d.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart3d.data = [
            {
                country: "ORGANIC SEARCH",
                litres: 501.9
            },
            {
                country: "EMAIL",
                litres: 301.9
            },
            {
                country: "REFERRRAL",
                litres: 201.1
            },
            {
                country: "SOCIAL MEDIA",
                litres: 165.8
            }
        ];

        chart3d.innerRadius = am4core.percent(40);
        chart3d.depth = 120;

        chart3d.legend = new am4charts.Legend();

        var series = chart3d.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.depthValue = "litres";
        series.dataFields.category = "country";
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
    }






    /*================================== Weather Chart =====================*/
    var t = document.getElementById("js-chart-weather");
    if (t)
        new Chart(t, {
            type: "line",
            data: {
                labels: ["January 1", "January 5", "January 10", "January 15", "January 20", "January 25"],
                datasets: [{
                        label: "Sold",
                        fill: !0,
                        lineTension: 0,
                        backgroundColor: "#d8d4f1",
                        borderWidth: 2,
                        borderColor: primarycolor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        pointRadius: 0,
                        pointBorderColor: "#fff",
                        pointBackgroundColor: "#2a2f37",
                        pointBorderWidth: 2,
                        pointHoverRadius: 6,
                        pointHoverBackgroundColor: "#FC2055",
                        pointHoverBorderColor: "#fff",
                        pointHoverBorderWidth: 2,
                        data: [40, 32, 42, 28, 53, 34],
                        spanGaps: !1
                    }]
            },
            options: {
                legend: {
                    display: !1
                },
                scales: {
                    xAxes: [{
                            display: !1,
                            ticks: {
                                fontSize: "11",
                                fontColor: "#969da5"
                            },
                            gridLines: {
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "rgba(0,0,0,0.0)"
                            }
                        }],
                    yAxes: [{
                            display: !1,
                            ticks: {
                                beginAtZero: !0,
                                max: 55
                            }
                        }]
                }
            }
        });

    /************************* Rating *****************************/

    if ($('.starrr').length > 0) {
        $('.starrr').starrr({
            rating: 4,
            readOnly: true
        })
    }


    /************************************* Social Chart ************************/
    var social_chart = document.getElementById("social-chart");
    if (social_chart) {
        $.plot("#social-chart", [{
                data: [[1, 60], [2, 90], [3, 35], [4, 70], [5, 40]], canvasRender: !0, showLabels: !0, label: "Google ads", labelPlacement: "below"
            }
            , {
                data: [[1, 0], [2, 30], [3, 80], [4, 30], [5, 65]], canvasRender: !0, showLabels: !0, label: "Facebook", labelPlacement: "below"
            },
            {
                data: [[1, 0], [2, 40], [3, 30], [4, 20], [5, 65]], canvasRender: !0, showLabels: !0, label: "Twitter", labelPlacement: "below"
            }
        ], {
            series: {
                lines: {
                    show: !0, lineWidth: 0, fill: !0, fillColor: {
                        colors: [{
                                opacity: 1
                            }
                            , {
                                opacity: 1
                            }
                        ]
                    }
                }
                , fillColor: "rgba(0, 0, 0, 1)", shadowSize: 0, curvedLines: {
                    apply: !0, active: !0, monotonicFit: !0
                }
            }

            , grid: {
                show: !1, hoverable: !0, clickable: !0
            }
            , tooltip: {
                show: !0, cssClass: "tooltip-chart", content: "<div class='content-chart'> <span> %s </span> <div class='label'> <div class='label-x'> %x.0 </div> - <div class='label-y'> %y.0 </div> </div></div>", defaultTheme: !1
            }
            , colors: ['#dd4b39', '#3b5999', '#55acee'], xaxis: {
                autoscaleMargin: 0, ticks: 11, tickDecimals: 0
            }
            , yaxis: {
                autoscaleMargin: .5, ticks: 5, tickDecimals: 0
            }
        }
        );
    }


    /********************************** Tours *************************/
    // Instance the tour
    var tour = new Tour({
        steps: [
            {
                placement: "bottom",
                element: "#tourfirst",
                title: "Title of my step",
                content: "Content of my step"
            },
            {
                placement: "bottom",
                element: "#options",
                title: "Title of my step",
                content: "Content of my step"
            },
            {
                placement: "left",
                element: "#settingbutton",
                title: "Title of my step",
                content: "Content of my step"
            }
        ],
        template: "<div class='popover tour bg-primary border-0'>" +
                "<div class='arrow'></div>" +
                "<h3 class='popover-title text-white bg-primary border-0'></h3>" +
                " <div class='popover-content text-white'></div>" +
                " <div class='popover-navigation d-flex'>" +
                "   <button class='btn btn-primary' data-role='prev'>&laquo; Prev</button>" +
                "<button class='btn btn-primary mx-1' data-role='end'>End tour</button>" +
                "  <button class='btn btn-primary' data-role='next'>Next &raquo;</button>" +
                "</div>" +
                " </div>"});

// Initialize the tour
    tour.init();

// Start the tour
    tour.start();

})(jQuery);
function hexToRGB(hex, alpha) {
    hex = hex.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    result = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
    return result;
}