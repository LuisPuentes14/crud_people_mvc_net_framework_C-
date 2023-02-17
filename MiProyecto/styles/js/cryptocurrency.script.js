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
                    "prices": [
                        8107.85,
                        8128.0,
                        8122.9,
                        8165.5,
                        8340.7,
                        8423.7,
                        8423.5,
                        8514.3,
                        8481.85,
                        8487.7,
                        8506.9,
                        8626.2,
                        8668.95,
                        8702.3,
                        8777.55,
                        8812.9,
                        8856.25,
                        8870.65,
                        8881.1,
                        9340.85
                    ]
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
                top: -60,
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
                    "prices": [
                        8107.85,
                        9128.0,
                        10122.9,
                        10165.5,
                        10340.7,
                        9423.7,
                        9423.5,
                        10514.3,
                        9481.85,
                        9487.7,
                        9506.9,
                        9626.2,
                        9668.95,
                        9702.3,
                        9777.55,
                        10812.9,
                        10856.25,
                        10870.65,
                        10881.1,
                        9340.85
                    ]
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

    /////////////////////////////////// Bitsum Chart /////////////////////
    var series =
            {
                "monthDataSeries1": {
                    "prices": [
                        6107.85,
                        7128.0,
                        7122.9,
                        7165.5,
                        7340.7,
                        7423.7,
                        7423.5,
                        7514.3,
                        7681.85,
                        7487.7,
                        7506.9,
                        7626.2,
                        7668.95,
                        7702.3,
                        7777.55,
                        7812.9,
                        7856.25,
                        7870.65,
                        7881.1,
                        7940.85
                    ]
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
        colors: ['#17a2b8', '#279eb1', '#38a2b3', '#4ba8b7', '#69c7d6'],
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
                top: -60,
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
            document.querySelector("#bsm_apex_area_chart"),
            options
            );
    chart.render();



    /////////////////////////////////// Litecoin Chart /////////////////////
    var series =
            {
                "monthDataSeries1": {
                    "prices": [
                        8107.85,
                        8128.0,
                        8122.9,
                        8165.5,
                        8340.7,
                        8423.7,
                        8423.5,
                        8514.3,
                        8481.85,
                        8487.7,
                        8506.9,
                        8626.2,
                        8668.95,
                        8702.3,
                        8777.55,
                        8812.9,
                        8856.25,
                        8870.65,
                        8881.1,
                        9340.85
                    ]
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
        colors: ['#ffc107', '#f1ba15', '#e8ba30', '#e2bb46', '#f3d16a'],
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
                top: -60,
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
            document.querySelector("#ltc_apex_area_chart"),
            options
            );
    chart.render();




    var day_data = [
        {"period": "2019-09-15", "licensed": 7568.50},
        {"period": "2019-09-14", "licensed": 7340.70},
        {"period": "2019-09-13", "licensed": 7178.25},
        {"period": "2019-09-12", "licensed": 7172.79},
        {"period": "2019-09-11", "licensed": 7170.93},
        {"period": "2019-09-10", "licensed": 6866.12},
        {"period": "2019-09-09", "licensed": 6751.76}
    ];
    var week_statistics = document.getElementById("bitcoin_statistics");
    if (week_statistics) {
        var weekstats = Morris.Line({
            ymin: 6500,
            element: 'bitcoin_statistics',
            data: day_data,
            xkey: 'period',
            preUnits: '$',
            resize: true,
            lineColors: [primarycolor, '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
            ykeys: ['licensed'],
            labels: ['Price']
        });
    }


    day_data = [
        {"period": "2019-09-15", "licensed": 133.64},
        {"period": "2019-09-14", "licensed": 130.64},
        {"period": "2019-09-13", "licensed": 127.79},
        {"period": "2019-09-12", "licensed": 127.66},
        {"period": "2019-09-11", "licensed": 128.10},
        {"period": "2019-09-10", "licensed": 125.52},
        {"period": "2019-09-09", "licensed": 126.55}
    ];
    var month_statistics = document.getElementById("ethereum_statistics");
    if (month_statistics) {
        var monthstats = Morris.Line({
            element: 'ethereum_statistics',
            ymin: 125,
            data: day_data,
            xkey: 'period',
            resize: true,
            padding: 15,
            preUnits: '$',
            lineColors: [primarycolor, '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
            ykeys: ['licensed'],
            labels: ['Sale']
        });
    }

    day_data = [
        {"period": "2019-09-15", "licensed": 42.17},
        {"period": "2019-09-14", "licensed": 41.37},
        {"period": "2019-09-13", "licensed": 39.96},
        {"period": "2019-09-12", "licensed": 40.01},
        {"period": "2019-09-11", "licensed": 39.97},
        {"period": "2019-09-10", "licensed": 38.87},
        {"period": "2019-09-09", "licensed": 38.34}
    ];
    var year_statistics = document.getElementById("litecoin_statistics");
    if (year_statistics) {
        var yearstats = Morris.Line({
            element: 'litecoin_statistics',
            ymin: 38,
            data: day_data,
            xkey: 'period',
            resize: true,
            padding: 15,
            preUnits: '$',
            lineColors: [primarycolor, '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
            ykeys: ['licensed'],
            labels: ['Sale']
        });
    }

    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href") // activated tab

        switch (target) {
            case "#pills-week":
                if (week_statistics) {
                    weekstats.redraw();
                }
                $(window).trigger('resize');
                break;
            case "#pills-month":
                if (month_statistics) {
                    monthstats.redraw();
                }
                $(window).trigger('resize');
                break;
            case "#pills-year":
                if (year_statistics) {
                    yearstats.redraw();
                }
                $(window).trigger('resize');
                break;
        }
    });


/********** Pie chart with broken down slices **********/

    var pie_variable_height_3d = document.getElementById("pie_variable_height_3d");
    if (pie_variable_height_3d) {

        var chart3d = am4core.create("pie_variable_height_3d", am4charts.PieChart3D);
        chart3d.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart3d.data = [
            {
                country: "Bitcoin (BTC)",
                litres: 501.9
            },
            {
                country: "Ethereum (ETH)",
                litres: 301.9
            },
            {
                country: "Xrp (XRP)",
                litres: 201.1
            },
            {
                country: "Tether (USDT)",
                litres: 165.8
            },
            {
                country: "Binance Coin (BNB)",
                litres: 139.9
            },
            {
                country: "Litecoin (LTC)",
                litres: 128.3
            }
        ];

        chart3d.innerRadius = am4core.percent(40);
        chart3d.depth = 120;

        chart3d.legend = new am4charts.Legend();
chart3d.responsive.enabled = true;
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