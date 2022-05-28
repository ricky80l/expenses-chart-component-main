var total = 0;
$(document).ready(function() {
    var d = new Date().toLocaleDateString('en', { weekday: 'short' }).toLowerCase();
    $.getJSON("data.json", function(json) {
        for (n = 0; n < json.length; n++) {
            var day = (json[n].day);
            var amount = (json[n].amount);
            var label_amount = '<div class="lab_amount ">$87.38</div>';
            var div_amount = '<div id="' + day + '" class="amount"></div>';
            $(".cont_graph").append('<div class="graph">' + label_amount + div_amount + '<div id="' + day + '"  class="cont_bar"><p class="label_day">' + day + '</p></div></div>');
            $("#" + day).css("height", (amount / 7) + "rem");
            if (day === d) {
                $("#" + day).addClass("current_day");
                console.log(d);
                console.log(day);
            } else {
                $("#" + day).addClass("other_day");
            };
        };


    });
});