'use strict';

(function ($) {
    var $window = $(window);
    var $body = $('html, body');
    var $main = $('#main');

    // Add scroll trigger
    var $scrollButton = $('.scroll-button');

    (function () {
        var initialComplete = false;
        var topOffset = -150;
        var leftOffset = 75;
        var animDuration = 300;

        var scrollStart = 400;
        var lastScroll = 0;

        function calculatePosition(scroll) {
            var mainWidth = $main.width();
            var topPos = topOffset + $window.height();
            var leftPos = leftOffset + mainWidth + ($body.width() - mainWidth) / 2;

            return {
                top: scroll + topPos,
                left: leftPos
            };
        }

        $window.scroll(function () {
            var scroll = $window.scrollTop();

            // Only change the class when the scroll point is passed
            if (scroll > scrollStart && lastScroll <= scrollStart) {
                $scrollButton.addClass('active');
            } else if (scroll <= scrollStart && lastScroll > scrollStart) {
                $scrollButton.removeClass('active');
            }

            var pos = calculatePosition(scroll);

            // Set the CSS initially, to avoid an animation when the page loads
            if (!initialComplete) {
                $scrollButton.css(pos);
                initialComplete = true;
            } else {
                $scrollButton.animate(pos, { duration: animDuration, queue: false });
            }

            lastScroll = scroll;
        });

        $window.resize(function () {
            var scroll = $window.scrollTop();
            $scrollButton.css(calculatePosition(scroll));
        });
    })();

    // Add up-scroll handler
    $scrollButton.find('a').click(function (event) {
        event.preventDefault();
        $body.animate({ scrollTop: 0 });
    });

    // Add smooth page transitions
    var $content = $main.smoothState({
        development: true,
        prefetch: true,
        pageCacheSize: 4,

        onStart: {
            duration: 300,
            render: function render(url, $container) {
                $body.animate({ scrollTop: 0 });

                // Remove class to trigger animation re-calc, then re-add after
                // yielding to browser events, to restart the animation
                $container.removeClass('smooth-scene');

                setTimeout(function () {
                    $container.addClass('smooth-scene');
                    $container.addClass('is-exiting');
                }, 0);

                $container.one('ss.onStartEnd ss.onProgressEnd ss.onEndEnd', function () {
                    return $container.removeClass('is-exiting');
                });
            }
        },

        callback: function callback(url, $container, $content) {
            if (window.ga) {
                window.ga('send', 'pageview');
            }
        }
    });
})(jQuery);
//# sourceMappingURL=/assets/js/main.js.map