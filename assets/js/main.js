(function($) {
    'use strict';

    var $body = $('html, body');

    // Add smooth page transitions
    var $content = $('#main').smoothState({
        development: true,
        prefetch: true,
        pageCacheSize: 4,

        onStart: {
            duration: 300,
            render: function(url, $container) {
                $body.animate({ scrollTop: 0 });

                // Remove class to trigger animation re-calc, then re-add after
                // yielding to browser events, to restart the animation
                $container.removeClass('smooth-scene');

                setTimeout(function() {
                    $container.addClass('smooth-scene');
                    $container.addClass('is-exiting');
                }, 0);

                $container.one("ss.onStartEnd ss.onProgressEnd ss.onEndEnd", function(){
                    $container.removeClass('is-exiting');
                });
            }
        }
    });
})(jQuery);
