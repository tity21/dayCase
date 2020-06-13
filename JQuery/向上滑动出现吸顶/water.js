(function($) {
    $.fn.extend({
        water: function(opt) {
            var def = {}
            var settings = $.extend({}, def, opt);
            start = settings.start;
            end = settings.end;
            // function init(start, end) {
            for (var i = start; i < end; i++) {
                if (i < lie) {
                    arr.push(starttop);
                }
                var minH = Math.min.apply(null, arr);
                var ind = $.inArray(minH, arr);
                $('img').eq(i).stop().animate({
                    left: imgw * ind,
                    top: minH
                }, 1000);
                arr[ind] += $('img').eq(i).height() + 10;
                p++;
            }
            // }
            // init(0, $('img').length);

        }
    })
})(jQuery)