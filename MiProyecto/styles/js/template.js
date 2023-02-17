(function ($) {
    "use strict";
    var primarycolor = getComputedStyle(document.body).getPropertyValue('--primarycolor');

/////////////////////// Loader /////////////////////
    var angle = 0;
    setInterval(function () {

        $(".se-pre-con img")
                .css('-webkit-transform', 'rotate(' + angle + 'deg)')
                .css('-moz-transform', 'rotate(' + angle + 'deg)')
                .css('-ms-transform', 'rotate(' + angle + 'deg)');
        angle++;
        angle++;
        angle++;
    }, 10);

    $(window).on("load", function () {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");
        ;
    });


    $('body:not(.horizontal-menu) #side-menu').slimScroll({
        height: '640px',
        color: '#fff'
    });
    $('body:not(.horizontal-menu) #side-menu .dropdown>ul').slimScroll({
        height: '100vh',
        color: '#fff'
    });
    $('.scrollerchat').slimScroll({
        height: '440px',
        color: '#fff'
    });
    $('.scrollertodo').slimScroll({
        height: '660px',
        color: '#fff'
    });
 $('[data-toggle="tooltip"]').tooltip();
   $('[data-toggle="popover"]').popover();
 
    $('.checkall').on('click', function () {
        $('.mail-app input:checkbox').not(this).prop('checked', this.checked);        
    });
 
/////////////////////////// Wizard Form ////////////////////////

 $('.nexttab').click(function(){    
    var nextId = $(this).parents('.tab-pane').next().attr("id");
  $('[href="#'+nextId+'"]').tab('show');
});

  $('.prevtab').click(function(){
    var nextId = $(this).parents('.tab-pane').prev().attr("id");
  $('[href="#'+nextId+'"]').tab('show');
});

/////////////////// input mask /////////////////////////////
$('[data-masked]').inputmask();

//////////////////////// Country Drop Down /////////////////
    $('#options').flagStrap({
        countries: {
            "AF": "Afghanistan",
            "AL": "Albania",
            "DZ": "Algeria",
            "AS": "American Samoa",
            "AD": "Andorra",
            "AO": "Angola",
            "AI": "Anguilla",
            "AG": "Antigua and Barbuda",
            "AR": "Argentina",
            "AM": "Armenia",
            "AW": "Aruba",
            "AU": "Australia",
            "AT": "Austria",
            "AZ": "Azerbaijan",
            "BS": "Bahamas",
            "BH": "Bahrain",
            "BD": "Bangladesh",
            "BB": "Barbados",
            "BY": "Belarus",
            "BE": "Belgium",
            "BZ": "Belize",
            "BJ": "Benin",
            "BM": "Bermuda",
            "BT": "Bhutan",
            "BO": "Bolivia, Plurinational State of",
            "BA": "Bosnia and Herzegovina",
            "BW": "Botswana",
            "BV": "Bouvet Island",
            "BR": "Brazil",
            "IO": "British Indian Ocean Territory",
            "BN": "Brunei Darussalam",
            "BG": "Bulgaria",
            "BF": "Burkina Faso",
            "BI": "Burundi",
            "KH": "Cambodia",
            "CM": "Cameroon",
            "CA": "Canada",
            "CV": "Cape Verde",
            "KY": "Cayman Islands",
            "CF": "Central African Republic",
            "TD": "Chad",
            "CL": "Chile",
            "CN": "China",
            "CO": "Colombia",
            "KM": "Comoros",
            "CG": "Congo",
            "CD": "Congo, the Democratic Republic of the",
            "CK": "Cook Islands",
            "CR": "Costa Rica",
            "CI": "C" + "&ocirc;" + "te d'Ivoire",
            "HR": "Croatia",
            "CU": "Cuba",
            "CW": "Cura" + "&ccedil;" + "ao",
            "CY": "Cyprus",
            "CZ": "Czech Republic",
            "DK": "Denmark",
            "DJ": "Djibouti",
            "DM": "Dominica",
            "DO": "Dominican Republic",
            "EC": "Ecuador",
            "EG": "Egypt",
            "SV": "El Salvador",
            "GQ": "Equatorial Guinea",
            "ER": "Eritrea",
            "EE": "Estonia",
            "ET": "Ethiopia",
            "FK": "Falkland Islands (Malvinas)",
            "FO": "Faroe Islands",
            "FJ": "Fiji",
            "FI": "Finland",
            "FR": "France",
            "GF": "French Guiana",
            "PF": "French Polynesia",
            "TF": "French Southern Territories",
            "GA": "Gabon",
            "GM": "Gambia",
            "GE": "Georgia",
            "DE": "Germany",
            "GH": "Ghana",
            "GI": "Gibraltar",
            "GR": "Greece",
            "GL": "Greenland",
            "GD": "Grenada",
            "GP": "Guadeloupe",
            "GU": "Guam",
            "GT": "Guatemala",
            "GG": "Guernsey",
            "GN": "Guinea",
            "GW": "Guinea-Bissau",
            "GY": "Guyana",
            "HT": "Haiti",
            "HM": "Heard Island and McDonald Islands",
            "VA": "Holy See (Vatican City State)",
            "HN": "Honduras",
            "HK": "Hong Kong",
            "HU": "Hungary",
            "IS": "Iceland",
            "IN": "India",
            "ID": "Indonesia",
            "IR": "Iran, Islamic Republic of",
            "IQ": "Iraq",
            "IE": "Ireland",
            "IM": "Isle of Man",
            "IL": "Israel",
            "IT": "Italy",
            "JM": "Jamaica",
            "JP": "Japan",
            "JE": "Jersey",
            "JO": "Jordan",
            "KZ": "Kazakhstan",
            "KE": "Kenya",
            "KI": "Kiribati",
            "KP": "Korea, Democratic People's Republic of",
            "KR": "Korea, Republic of",
            "KW": "Kuwait",
            "KG": "Kyrgyzstan",
            "LA": "Lao People's Democratic Republic",
            "LV": "Latvia",
            "LB": "Lebanon",
            "LS": "Lesotho",
            "LR": "Liberia",
            "LY": "Libya",
            "LI": "Liechtenstein",
            "LT": "Lithuania",
            "LU": "Luxembourg",
            "MO": "Macao",
            "MK": "Macedonia, the former Yugoslav Republic of",
            "MG": "Madagascar",
            "MW": "Malawi",
            "MY": "Malaysia",
            "MV": "Maldives",
            "ML": "Mali",
            "MT": "Malta",
            "MH": "Marshall Islands",
            "MQ": "Martinique",
            "MR": "Mauritania",
            "MU": "Mauritius",
            "YT": "Mayotte",
            "MX": "Mexico",
            "FM": "Micronesia, Federated States of",
            "MD": "Moldova, Republic of",
            "MC": "Monaco",
            "MN": "Mongolia",
            "ME": "Montenegro",
            "MS": "Montserrat",
            "MA": "Morocco",
            "MZ": "Mozambique",
            "MM": "Myanmar",
            "NA": "Namibia",
            "NR": "Nauru",
            "NP": "Nepal",
            "NL": "Netherlands",
            "NC": "New Caledonia",
            "NZ": "New Zealand",
            "NI": "Nicaragua",
            "NE": "Niger",
            "NG": "Nigeria",
            "NU": "Niue",
            "NF": "Norfolk Island",
            "MP": "Northern Mariana Islands",
            "NO": "Norway",
            "OM": "Oman",
            "PK": "Pakistan",
            "PW": "Palau",
            "PS": "Palestinian Territory, Occupied",
            "PA": "Panama",
            "PG": "Papua New Guinea",
            "PY": "Paraguay",
            "PE": "Peru",
            "PH": "Philippines",
            "PN": "Pitcairn",
            "PL": "Poland",
            "PT": "Portugal",
            "PR": "Puerto Rico",
            "QA": "Qatar",
            "RE": "R" + "&eacute;" + "union",
            "RO": "Romania",
            "RU": "Russian Federation",
            "RW": "Rwanda",
            "SH": "Saint Helena, Ascension and Tristan da Cunha",
            "KN": "Saint Kitts and Nevis",
            "LC": "Saint Lucia",
            "MF": "Saint Martin (French part)",
            "PM": "Saint Pierre and Miquelon",
            "VC": "Saint Vincent and the Grenadines",
            "WS": "Samoa",
            "SM": "San Marino",
            "ST": "Sao Tome and Principe",
            "SA": "Saudi Arabia",
            "SN": "Senegal",
            "RS": "Serbia",
            "SC": "Seychelles",
            "SL": "Sierra Leone",
            "SG": "Singapore",
            "SX": "Sint Maarten (Dutch part)",
            "SK": "Slovakia",
            "SI": "Slovenia",
            "SB": "Solomon Islands",
            "SO": "Somalia",
            "ZA": "South Africa",
            "GS": "South Georgia and the South Sandwich Islands",
            "SS": "South Sudan",
            "ES": "Spain",
            "LK": "Sri Lanka",
            "SD": "Sudan",
            "SR": "Suriname",
            "SZ": "Swaziland",
            "SE": "Sweden",
            "CH": "Switzerland",
            "SY": "Syrian Arab Republic",
            "TW": "Taiwan, Province of China",
            "TJ": "Tajikistan",
            "TZ": "Tanzania, United Republic of",
            "TH": "Thailand",
            "TL": "Timor-Leste",
            "TG": "Togo",
            "TK": "Tokelau",
            "TO": "Tonga",
            "TT": "Trinidad and Tobago",
            "TN": "Tunisia",
            "TR": "Turkey",
            "TM": "Turkmenistan",
            "TC": "Turks and Caicos Islands",
            "TV": "Tuvalu",
            "UG": "Uganda",
            "UA": "Ukraine",
            "AE": "United Arab Emirates",
            "GB": "United Kingdom",
            "US": "United States",
            "UM": "United States Minor Outlying Islands",
            "UY": "Uruguay",
            "UZ": "Uzbekistan",
            "VU": "Vanuatu",
            "VE": "Venezuela, Bolivarian Republic of",
            "VN": "Viet Nam",
            "VG": "Virgin Islands, British",
            "VI": "Virgin Islands, U.S.",
            "WF": "Wallis and Futuna",
            "EH": "Western Sahara",
            "YE": "Yemen",
            "ZM": "Zambia",
            "ZW": "Zimbabwe"
        },
        buttonSize: "btn-sm",
        buttonType: "btn-primary",
        labelMargin: "10px",
        scrollable: true,
        scrollableHeight: "350px"
    });

 /*==============================================================
     Form Validation 
     ============================================================= */
var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });

    /*==============================================================
     Sidebar 
     ============================================================= */

    $('.sidebarCollapse').on('click', function () {
        $('body').toggleClass('hide-sidebar');
        $('.sidebar').toggleClass('active');
        $('#header-fix').toggleClass('active');
    });

    $('.mobilesearch').on('click', function () {
        $('.search-form').toggleClass('d-none');

    });

    /*==============================================================
     Home Chart 
     ============================================================= */


    var day_data = [
        {"period": "2019-09-15", "licensed": 3000},
        {"period": "2019-09-14", "licensed": 2357},
        {"period": "2019-09-13", "licensed": 2748},
        {"period": "2019-09-12", "licensed": 2471},
        {"period": "2019-09-11", "licensed": 2371},
        {"period": "2019-09-10", "licensed": 2201},
        {"period": "2019-09-09", "licensed": 1215}
    ];
    var week_statistics = document.getElementById("week_statistics");
    if (week_statistics) {
        var weekstats = Morris.Line({
            element: 'week_statistics',
            data: day_data,
            xkey: 'period',
            preUnits: '$',
            resize: true,
            lineColors: [primarycolor, '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
            ykeys: ['licensed'],
            labels: ['Sale']
        });
    }


    day_data = [
        {"period": "2019 W48", "licensed": 15407, "sorned": 660},
        {"period": "2019 W47", "licensed": 11407, "sorned": 660},
        {"period": "2019 W46", "licensed": 15407, "sorned": 660},
        {"period": "2019 W45", "licensed": 18407, "sorned": 660},
        {"period": "2019 W44", "licensed": 15407, "sorned": 660},
        {"period": "2019 W43", "licensed": 12407, "sorned": 660},
        {"period": "2019 W42", "licensed": 11407, "sorned": 660},
        {"period": "2019 W41", "licensed": 10407, "sorned": 660},
        {"period": "2019 W40", "licensed": 9407, "sorned": 660},
        {"period": "2019 W39", "licensed": 10407, "sorned": 660},
        {"period": "2019 W38", "licensed": 12407, "sorned": 660},
        {"period": "2019 W37", "licensed": 11407, "sorned": 660},
        {"period": "2019 W36", "licensed": 9407, "sorned": 660},
        {"period": "2019 W35", "licensed": 7407, "sorned": 660},
        {"period": "2019 W34", "licensed": 8407, "sorned": 660},
        {"period": "2019 W33", "licensed": 9407, "sorned": 660},
        {"period": "2019 W32", "licensed": 8407, "sorned": 660},
        {"period": "2019 W31", "licensed": 7407, "sorned": 660},
        {"period": "2019 W30", "licensed": 6407, "sorned": 660},
        {"period": "2019 W29", "licensed": 5407, "sorned": 660},
        {"period": "2019 W28", "licensed": 4407, "sorned": 660},
        {"period": "2019 W27", "licensed": 3407, "sorned": 660},
        {"period": "2019 W26", "licensed": 3351, "sorned": 629},
        {"period": "2019 W25", "licensed": 3269, "sorned": 618},
        {"period": "2019 W24", "licensed": 3246, "sorned": 661},
        {"period": "2019 W23", "licensed": 3257, "sorned": 667},
        {"period": "2019 W22", "licensed": 3248, "sorned": 627},
        {"period": "2019 W21", "licensed": 3171, "sorned": 660},
        {"period": "2019 W20", "licensed": 3171, "sorned": 676},
        {"period": "2019 W19", "licensed": 3201, "sorned": 656},
        {"period": "2019 W18", "licensed": 3215, "sorned": 622},
        {"period": "2019 W17", "licensed": 3148, "sorned": 632},
        {"period": "2019 W16", "licensed": 3155, "sorned": 681},
        {"period": "2019 W15", "licensed": 3190, "sorned": 667},
        {"period": "2019 W14", "licensed": 3226, "sorned": 620},
        {"period": "2019 W13", "licensed": 3245, "sorned": null},
        {"period": "2019 W12", "licensed": 3289, "sorned": null},
        {"period": "2019 W11", "licensed": 3263, "sorned": null},
        {"period": "2019 W10", "licensed": 3189, "sorned": null},
        {"period": "2019 W09", "licensed": 3079, "sorned": null},
        {"period": "2019 W08", "licensed": 3085, "sorned": null},
        {"period": "2019 W07", "licensed": 3055, "sorned": null},
        {"period": "2019 W06", "licensed": 3063, "sorned": null},
        {"period": "2019 W05", "licensed": 2943, "sorned": null},
        {"period": "2019 W04", "licensed": 2806, "sorned": null},
        {"period": "2019 W03", "licensed": 2674, "sorned": null},
        {"period": "2019 W02", "licensed": 1702, "sorned": null},
        {"period": "2019 W01", "licensed": 1732, "sorned": null}
    ];
    var month_statistics = document.getElementById("month_statistics");
    if (month_statistics) {
        var monthstats = Morris.Line({
            element: 'month_statistics',
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
        {"period": "2019", "licensed": 14246},
        {"period": "2018", "licensed": 11257},
        {"period": "2017", "licensed": 12248},
        {"period": "2016", "licensed": 9171},
        {"period": "2015", "licensed": 7171},
        {"period": "2014", "licensed": 5201},
        {"period": "2013", "licensed": 3215}
    ];
    var year_statistics = document.getElementById("year_statistics");
    if (year_statistics) {
        var yearstats = Morris.Line({
            element: 'year_statistics',
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

    /*================Image Convert to Background Image Js======================*/
    $(document).ready(function () {
        $('.background-image-maker').each(function () {
            var imgURL = $(this).next('.holder-image').find('img').attr('src');
            $(this).css('background-image', 'url(' + imgURL + ')');
        });
    });

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

    /********************************** Top Scroll *************************/
    $('.scrollup').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /********************************** Tours *************************/
    // Instance the tour
    var tour = new Tour({
        steps: [
            {
                placement: "bottom",
                element: "#collapse",
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

    /****************************** Window Scroll ****************************/
    $(window).on("scroll", function () {
        /*==============================================================
         Back To Top
         =============================================================*/
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    /*==============================================================
     Sidebar Settings 
     ============================================================= */
    $('.setting').on('click', function () {
        $('#settings').toggleClass('active');
        return false;
    });

    $('.layout').on('click', function () {
        if ($(this).val() == 'horizontal') {
            $('body').addClass('horizontal-menu');
            $(".sidebar .slimScrollBar,.sidebar .slimScrollRail").remove();
            $(".sidebar .slimScrollDiv").contents().unwrap();
            $('#side-menu').attr('style', '');
            $('#side-menu ul').attr('style', '');

        } else
        {
            $('body').removeClass('horizontal-menu');
            $('body:not(.horizontal-menu) #side-menu').slimScroll({
                height: '640px',
                color: '#fff'
            });
            $('body:not(.horizontal-menu) #side-menu .dropdown ul').slimScroll({
                height: '100vh',
                color: '#fff'
            });
        }
    });
    $(".color-box").on('click', function () {
        $("input.color").val($(this).data('color'));
        $('body').css("--primarycolor", $("input.color").val());
        $('.dark').css("--primarycolor", $("input.color").val());
        $('.semi-dark').css("--primarycolor", $("input.color").val());        
        
    });
    $("input.color").on('change', function () {
        $('html').css("--primarycolor", $(this).val());
        $('.dark').css("--primarycolor", $(this).val());
        $('.semi-dark').css("--primarycolor", $(this).val());
    });

    $('.style').on('click', function () {
        $('body').removeClass('light dark semi-dark');
        $('body').addClass($(this).val());
        $('html').css("--primarycolor", $("input.color").val());
        $('.dark').css("--primarycolor", $("input.color").val());
        $('.semi-dark').css("--primarycolor", $("input.color").val());
    });
    $('.sidebar').on('click', function () {
        if ($(this).is(':checked')) {
            $('body').addClass('compact-menu');
        } else
        {
            $('body').removeClass('compact-menu');
        }

    });

    
    /*========================================================
     * 
     * Moriss
     */
    if ($('#morris-area-chart2').length > 0)
    {
        Morris.Area({
            element: 'morris-area-chart2',
            data: [{
                    period: '2010',
                    SiteA: 0,
                    SiteB: 0,
                }, {
                    period: '2011',
                    SiteA: 130,
                    SiteB: 100,
                }, {
                    period: '2012',
                    SiteA: 80,
                    SiteB: 60,
                }, {
                    period: '2013',
                    SiteA: 70,
                    SiteB: 200,
                }, {
                    period: '2014',
                    SiteA: 180,
                    SiteB: 150,
                }, {
                    period: '2015',
                    SiteA: 105,
                    SiteB: 90,
                },
                {
                    period: '2016',
                    SiteA: 250,
                    SiteB: 150,
                }],
            xkey: 'period',
            ykeys: ['SiteA', 'SiteB'],
            labels: ['Site A', 'Site B'],
            pointSize: 0,
            pointStrokeColors: [primarycolor, '#0230cb'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 0,
            smooth: false,
            hideHover: 'auto',
            lineColors: [primarycolor, '#0230cb'],
            resize: true

        });
    }
    if ($('#morris-area-chart').length > 0)
    {
        /// Morris Line chart
        Morris.Area({
            element: 'morris-area-chart',
            data: [{
                    period: '2010',
                    iphone: 50,
                    ipad: 80,
                    itouch: 20
                }, {
                    period: '2011',
                    iphone: 130,
                    ipad: 100,
                    itouch: 80
                }, {
                    period: '2012',
                    iphone: 80,
                    ipad: 60,
                    itouch: 70
                }, {
                    period: '2013',
                    iphone: 70,
                    ipad: 200,
                    itouch: 140
                }, {
                    period: '2014',
                    iphone: 180,
                    ipad: 150,
                    itouch: 140
                }, {
                    period: '2015',
                    iphone: 105,
                    ipad: 100,
                    itouch: 80
                },
                {
                    period: '2016',
                    iphone: 250,
                    ipad: 150,
                    itouch: 200
                }],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            pointSize: 3,
            fillOpacity: 0,
            pointStrokeColors: [primarycolor, '#6881d6', '#16297b'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 1,
            hideHover: 'auto',
            lineColors: [primarycolor, '#6881d6', '#16297b'],
            resize: true

        });
    }
    if ($('#extra-area-chart').length > 0)
    {
        // Extra chart
        Morris.Area({
            element: 'extra-area-chart',
            data: [{
                    period: '2010',
                    iphone: 0,
                    ipad: 0,
                    itouch: 0
                }, {
                    period: '2011',
                    iphone: 50,
                    ipad: 15,
                    itouch: 5
                }, {
                    period: '2012',
                    iphone: 20,
                    ipad: 50,
                    itouch: 65
                }, {
                    period: '2013',
                    iphone: 60,
                    ipad: 12,
                    itouch: 7
                }, {
                    period: '2014',
                    iphone: 30,
                    ipad: 20,
                    itouch: 120
                }, {
                    period: '2015',
                    iphone: 25,
                    ipad: 80,
                    itouch: 40
                }, {
                    period: '2016',
                    iphone: 10,
                    ipad: 10,
                    itouch: 10
                }
            ],
            lineColors: [primarycolor, '#0230cb'],
            xkey: 'period',
            ykeys: ['iphone', 'itouch'],
            labels: ['Site A', 'Site B'],
            pointStrokeColors: [primarycolor, '#0230cb'],
            pointSize: 0,
            lineWidth: 0,
            resize: true,
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            hideHover: 'true'
        });
    }
    if ($('#hero-bar').length > 0)
    {
        Morris.Bar({
            element: 'hero-bar',
            data: [
                {device: 'iPhone', geekbench: 136},
                {device: 'iPhone 3G', geekbench: 137},
                {device: 'iPhone 3GS', geekbench: 275},
                {device: 'iPhone 4', geekbench: 380},
                {device: 'iPhone 4S', geekbench: 655},
                {device: 'iPhone 5', geekbench: 1571}
            ],
            xkey: 'device',
            ykeys: ['geekbench'],
            labels: ['Geekbench'],
            barRatio: 0.4,
            xLabelAngle: 35,
            hideHover: 'auto'
        });
    }
    if ($('#donut-graph').length > 0)
    {
        Morris.Donut({
            element: 'donut-graph',
            data: [
                {value: 70, label: 'foo'},
                {value: 15, label: 'bar'},
                {value: 10, label: 'baz'},
                {value: 5, label: 'A really really long label'}
            ],
            backgroundColor: primarycolor,
            labelColor: '#060',
            colors: [
                primarycolor,
                '#25b8d6',
                '#2397af',
                '#6bbdce'
            ],
            formatter: function (x) {
                return x + "%"
            }
        });
    }

    if ($('#reload-graph').length > 0)
    {
        var nReloads = 0;
        function data(offset) {
            var ret = [];
            for (var x = 0; x <= 360; x += 10) {
                var v = (offset + x) % 360;
                ret.push({
                    x: x,
                    y: Math.sin(Math.PI * v / 180).toFixed(4),
                    z: Math.cos(Math.PI * v / 180).toFixed(4)
                });
            }
            return ret;
        }
        var graph = Morris.Line({
            element: 'reload-graph',
            data: data(0),
            lineColors: [primarycolor, '#0230cb'],
            xkey: 'x',
            ykeys: ['y', 'z'],
            labels: ['sin()', 'cos()'],
            parseTime: false,
            ymin: -1.0,
            ymax: 1.0,
            hideHover: true
        });
        function update() {
            nReloads++;
            graph.setData(data(5 * nReloads));
        }
        setInterval(update, 100);
    }


    /****************************************** Chartist Js ******************************/
    if ($('.ct-chart').length > 0)
    {
        new Chartist.Line('.ct-chart', {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
                [12, 9, 7, 8, 5],
                [2, 1, 3.5, 7, 3],
                [1, 3, 4, 5, 6]
            ]
        }, {
            fullWidth: true,
            chartPadding: {
                right: 40
            }
        });
    }
    if ($('.ct-area-chart').length > 0)
    {
        new Chartist.Line('.ct-area-chart', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [5, 9, 7, 8, 5, 3, 5, 4]
            ]
        }, {
            low: 0,
            showArea: true
        });
    }
    if ($('.ct-bi-polar').length > 0)
    {
        new Chartist.Line('.ct-bi-polar', {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            series: [
                [1, 2, 3, 1, -2, 0, 1, 0],
                [-2, -1, -2, -1, -2.5, -1, -2, -1],
                [0, 0, 0, 1, 2, 2.5, 2, 1],
                [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
            ]
        }, {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showLabel: false,
                showGrid: false
            }
        });

    }
    if ($('.ct-advance-slim').length > 0)
    {

        var chart = new Chartist.Line('.ct-advance-slim', {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
                [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
        }, {
            low: 0
        });

// Let's put a sequence number aside so we can use it in the event callbacks
        var seq = 0,
                delays = 80,
                durations = 500;

// Once the chart is fully created we reset the sequence
        chart.on('created', function () {
            seq = 0;
        });

// On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        chart.on('draw', function (data) {
            seq++;

            if (data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                    opacity: {
                        // The delay when we like to start the animation
                        begin: seq * delays + 1000,
                        // Duration of the animation
                        dur: durations,
                        // The value where the animation should start
                        from: 0,
                        // The value where it should end
                        to: 1
                    }
                });
            } else if (data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                    y: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.y + 100,
                        to: data.y,
                        // We can specify an easing function from Chartist.Svg.Easing
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                    x: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 100,
                        to: data.x,
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    x2: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[data.axis.units.pos + '1'] - 30,
                    to: data[data.axis.units.pos + '1'],
                    easing: 'easeOutQuart'
                };

                var pos2Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[data.axis.units.pos + '2'] - 100,
                    to: data[data.axis.units.pos + '2'],
                    easing: 'easeOutQuart'
                };

                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                };

                data.element.animate(animations);
            }
        });

// For the sake of the example we update the chart every time it's created with a delay of 10 seconds
        chart.on('created', function () {
            if (window.__exampleAnimateTimeout) {
                clearTimeout(window.__exampleAnimateTimeout);
                window.__exampleAnimateTimeout = null;
            }
            window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
        });

    }
    if ($('.ct-svg-animation').length > 0)
    {


        var chart = new Chartist.Line('.ct-svg-animation', {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
                [1, 5, 2, 5, 4, 3],
                [2, 3, 4, 8, 1, 2],
                [5, 4, 3, 2, 1, 0.5]
            ]
        }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true
        });

        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
        });
    }
    if ($('.ct-bar').length > 0)
    {
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
        };

        var options = {
            seriesBarDistance: 10
        };

        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];

        new Chartist.Bar('.ct-bar', data, options, responsiveOptions);
    }
})(jQuery);
