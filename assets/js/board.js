/*
 * BOARD
 */

+function($) {
    $(window).on('load resize', function() {
        var transform;
        if (window.innerWidth < 1920 || window.innerHeight < 1080) {
            var scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
            transform = 'scale(' + scale + ')';
        } else {
            transform = 'none';
        }
        $('.fx-board').css('transform', transform);
    });
}($);