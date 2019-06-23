/*
    Projection by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function ($) {
    function viewport() {
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return {
            width: e[a + 'Width'],
            height: e[a + 'Height']
        };
    }
    // Breakpoints.
    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function () {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Off-Canvas Navigation.

        // Navigation Panel.
        $(
                '<div id="navPanel">' +
                $('#nav').html() +
                '<a href="#navPanel" class="close"></a>' +
                '</div>'
            )
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'left'
            });

        // Fix: Remove transitions on WP<10 (poor/buggy performance).
        if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
            $('#navPanel')
            .css('transition', 'none');
    });

    var shareLinks = document.querySelectorAll('.share-link');
    if (shareLinks.length) {
        for(var i = 0; i <= shareLinks.length; i++) {
            shareLinks[i].addEventListener('click', function(e){
                e.preventDefault();
                var $this = $(this);
                var href = $this.attr('href');
                var top = screen.width / 2 - 300;
                var left = screen.height / 2 - 150;
        
                return viewport().width > 736 ? window.open(href, $this.attr('title'), 'toolbar=no, resizable=yes, location=no, width=600, height=300, menubar=no, status=no, scrollbars=no, directories=no, top=' + top + ', left=' + left) : window.open(href);
            });
        }
    }

})(jQuery);
