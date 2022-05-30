$(document).ready(function() {
    var d = new Date().toLocaleDateString('en', { weekday: 'short' }).toLowerCase();
    $.getJSON("data.json", function(json) {
        for (n = 0; n < json.length; n++) {
            var day = (json[n].day);
            var amount = (json[n].amount);
            var label_amount = '<div class="lab_amount lab_' + day + '">$' + amount + '</div>';
            var div_amount = '<div id="' + day + '" class="amount"></div>';
            $(".cont_graph").append('<div class="graph">' + label_amount + div_amount + '<div id="' + day + '"  class="cont_bar"><p class="label_day">' + day + '</p></div></div>');
            $("#" + day).css("height", (amount / 7) + "rem");
            if (day === d) {
                $("#" + day).addClass("current_day");
            } else {
                $("#" + day).addClass("other_day");
            };
        };
    });
    $(".amount").hover(function(e) {
        var selected = e.target.id;
        $(".lab_" + selected).toggleClass("show");
    });
});