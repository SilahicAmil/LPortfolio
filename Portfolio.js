//SCROLL EFFECT ON BUTTONS
$("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    } /* speed */ );
});


//
//
//
// GRAPH
//var ctx = document.getElementById("myChart").getContext('2d');
//var myChart = new Chart(ctx, {
//    type: 'horizontalBar',
//    data: {
//        labels: ["HTML", "CSS", "JavaScript", "AWS", "PHP", "Backend"],
//        datasets: [{
//            barPercentage: 10,
//            barThickness: 100,
//            label: "",
//            data: [100, 85, 50, 45, 45, 45],
//            backgroundColor: [
//                'rgb(244, 66, 66)',
//                'rgb(69, 107, 147)',
//                'rgb(201, 192, 20)',
//                'rgb(92, 191, 196)',
//                'rgb(174, 84, 206)',
//                'rgb(237, 167, 64)'
//            ],
//            borderColor: [
//                'rgb(244, 66, 66)',
//                'rgb(69, 107, 147)',
//                'rgb(201, 192, 20)',
//                'rgb(92, 191, 196)',
//                'rgb(174, 84, 206)',
//                'rgb(237, 167, 64)'
//            ],
//            borderWidth: 0
//        }]
//    },
//    options: {
//        maintainAspectRatio: true,
//        scales:  {
//            yAxes: [{
//                ticks: {
//                    beginAtZero: true
//                }
//            }]
//        }
//    }
//});
