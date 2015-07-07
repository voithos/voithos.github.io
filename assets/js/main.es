(function($) {
    let $window = $(window);
    let $body = $('html, body');
    let $main = $('#main');

    // Add scroll trigger
    let $scrollButton = $('.scroll-button');

    (function() {
        let initialComplete = false;
        let topOffset = -150;
        let leftOffset = 75;
        let animDuration = 300;

        let scrollStart = 400;
        let lastScroll = 0;

        function calculatePosition(scroll) {
            let mainWidth = $main.width();
            let topPos = topOffset + $window.height();
            let leftPos = leftOffset + mainWidth + ($body.width() - mainWidth) / 2

            return {
                top: scroll + topPos,
                left: leftPos
            };
        }

        $window.scroll(function() {
            let scroll = $window.scrollTop();

            // Only change the class when the scroll point is passed
            if (scroll > scrollStart && lastScroll <= scrollStart ) {
                $scrollButton.addClass('active');
            } else if (scroll <= scrollStart && lastScroll > scrollStart) {
                $scrollButton.removeClass('active');
            }

            let pos = calculatePosition(scroll);

            // Set the CSS initially, to avoid an animation when the page loads
            if (!initialComplete) {
                $scrollButton.css(pos);
                initialComplete = true;
            } else {
                $scrollButton.animate(pos, { duration: animDuration, queue: false });
            }

            lastScroll = scroll;
        });

        $window.resize(function() {
            let scroll = $window.scrollTop();
            $scrollButton.css(calculatePosition(scroll));
        });
    })();

    // Add up-scroll handler
    $scrollButton.find('a').click(event => {
        event.preventDefault();
        $body.animate({ scrollTop: 0 });
    });

    // Add smooth page transitions
    let $content = $main.smoothState({
        development: true,
        prefetch: true,
        pageCacheSize: 4,

        onStart: {
            duration: 300,
            render(url, $container) {
                $body.animate({ scrollTop: 0 });

                // Remove class to trigger animation re-calc, then re-add after
                // yielding to browser events, to restart the animation
                $container.removeClass('smooth-scene');

                setTimeout(function() {
                    $container.addClass('smooth-scene');
                    $container.addClass('is-exiting');
                }, 0);

                $container.one("ss.onStartEnd ss.onProgressEnd ss.onEndEnd",
                               () => $container.removeClass('is-exiting'));
            }
        },

        callback(url, $container, $content) {
            if (window.ga) {
                window.ga('send', 'pageview');
            }
        }
    });
})(jQuery);
